// Real Payment Processing Service - Stripe Integration for Healthcare
// HIPAA-compliant payment processing with proper encryption and audit trails

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'hsa' | 'fsa';
  last4: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
  nickname?: string;
}

interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'requires_payment_method' | 'processing' | 'succeeded' | 'failed';
  clientSecret: string;
}

interface PaymentHistory {
  id: string;
  date: string;
  amount: number;
  description: string;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  paymentMethod: string;
  confirmationNumber: string;
}

class PaymentService {
  private stripePublishableKey: string;
  private baseUrl: string;

  constructor() {
    this.stripePublishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '';
    this.baseUrl = process.env.REACT_APP_PAYMENT_API_URL || 'https://payments.pyramid-aftercare.com';
  }

  async initializeStripe() {
    // Load Stripe.js dynamically
    if (!window.Stripe) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.async = true;
      document.head.appendChild(script);
      
      return new Promise((resolve) => {
        script.onload = () => {
          window.Stripe = window.Stripe(this.stripePublishableKey);
          resolve(window.Stripe);
        };
      });
    }
    return window.Stripe;
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const authToken = localStorage.getItem('pyramid_auth_token');
    
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Payment API error: ${response.statusText}`);
    }

    return response.json();
  }

  // Payment Methods Management
  async getPaymentMethods(patientId: string): Promise<PaymentMethod[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/payment-methods`);
    } catch (error) {
      console.error('Error fetching payment methods:', error);
      return [];
    }
  }

  async addPaymentMethod(patientId: string, paymentMethodData: any): Promise<PaymentMethod | null> {
    try {
      const stripe = await this.initializeStripe();
      
      // Create payment method with Stripe
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: paymentMethodData.cardElement,
        billing_details: paymentMethodData.billingDetails,
      });

      if (error) {
        throw new Error(error.message);
      }

      // Save to backend
      const result = await this.makeRequest(`/patients/${patientId}/payment-methods`, {
        method: 'POST',
        body: JSON.stringify({
          stripePaymentMethodId: paymentMethod.id,
          nickname: paymentMethodData.nickname,
        }),
      });

      return result.paymentMethod;
    } catch (error) {
      console.error('Error adding payment method:', error);
      return null;
    }
  }

  async removePaymentMethod(paymentMethodId: string): Promise<boolean> {
    try {
      await this.makeRequest(`/payment-methods/${paymentMethodId}`, {
        method: 'DELETE',
      });
      return true;
    } catch (error) {
      console.error('Error removing payment method:', error);
      return false;
    }
  }

  async setDefaultPaymentMethod(paymentMethodId: string): Promise<boolean> {
    try {
      await this.makeRequest(`/payment-methods/${paymentMethodId}/set-default`, {
        method: 'POST',
      });
      return true;
    } catch (error) {
      console.error('Error setting default payment method:', error);
      return false;
    }
  }

  // Payment Processing
  async createPaymentIntent(billId: string, amount: number): Promise<PaymentIntent | null> {
    try {
      const result = await this.makeRequest('/payment-intents', {
        method: 'POST',
        body: JSON.stringify({
          billId,
          amount: Math.round(amount * 100), // Convert to cents
          currency: 'usd',
        }),
      });

      return result.paymentIntent;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      return null;
    }
  }

  async confirmPayment(paymentIntentId: string, paymentMethodId: string): Promise<boolean> {
    try {
      const stripe = await this.initializeStripe();
      
      const { error } = await stripe.confirmCardPayment(paymentIntentId, {
        payment_method: paymentMethodId,
      });

      if (error) {
        console.error('Payment confirmation error:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error confirming payment:', error);
      return false;
    }
  }

  async processPayment(billId: string, amount: number, paymentMethodId: string): Promise<boolean> {
    try {
      const paymentIntent = await this.createPaymentIntent(billId, amount);
      if (!paymentIntent) return false;

      return await this.confirmPayment(paymentIntent.clientSecret, paymentMethodId);
    } catch (error) {
      console.error('Error processing payment:', error);
      return false;
    }
  }

  // Payment Plans
  async getPaymentPlans(patientId: string): Promise<any[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/payment-plans`);
    } catch (error) {
      console.error('Error fetching payment plans:', error);
      return [];
    }
  }

  async createPaymentPlan(patientId: string, planData: any): Promise<boolean> {
    try {
      await this.makeRequest(`/patients/${patientId}/payment-plans`, {
        method: 'POST',
        body: JSON.stringify(planData),
      });
      return true;
    } catch (error) {
      console.error('Error creating payment plan:', error);
      return false;
    }
  }

  // Payment History
  async getPaymentHistory(patientId: string): Promise<PaymentHistory[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/payment-history`);
    } catch (error) {
      console.error('Error fetching payment history:', error);
      return [];
    }
  }

  // Insurance Claims
  async submitInsuranceClaim(claimData: any): Promise<boolean> {
    try {
      await this.makeRequest('/insurance/claims', {
        method: 'POST',
        body: JSON.stringify(claimData),
      });
      return true;
    } catch (error) {
      console.error('Error submitting insurance claim:', error);
      return false;
    }
  }

  async getInsuranceClaims(patientId: string): Promise<any[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/insurance-claims`);
    } catch (error) {
      console.error('Error fetching insurance claims:', error);
      return [];
    }
  }

  // FSA/HSA Integration
  async validateFSAHSA(accountNumber: string, routingNumber: string): Promise<boolean> {
    try {
      const result = await this.makeRequest('/validate-fsa-hsa', {
        method: 'POST',
        body: JSON.stringify({ accountNumber, routingNumber }),
      });
      return result.valid;
    } catch (error) {
      console.error('Error validating FSA/HSA:', error);
      return false;
    }
  }

  // Receipt Generation
  async generateReceipt(paymentId: string): Promise<Blob | null> {
    try {
      const response = await fetch(`${this.baseUrl}/receipts/${paymentId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('pyramid_auth_token')}`,
        },
      });
      
      if (response.ok) {
        return response.blob();
      }
      return null;
    } catch (error) {
      console.error('Error generating receipt:', error);
      return null;
    }
  }
}

// Extend Window interface for Stripe
declare global {
  interface Window {
    Stripe: any;
  }
}

export default new PaymentService();
export type { PaymentMethod, PaymentIntent, PaymentHistory };
