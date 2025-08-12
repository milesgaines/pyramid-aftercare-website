// Real Medical Records API Integration
// This would connect to actual EHR systems like Epic, Cerner, or Allscripts

interface MedicalRecord {
  id: string;
  type: 'assessment' | 'progress_note' | 'treatment_plan' | 'lab_result' | 'prescription';
  title: string;
  date: string;
  provider: string;
  summary: string;
  status: 'completed' | 'pending' | 'reviewed';
  downloadUrl?: string;
}

interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  datePrescribed: string;
  refillsRemaining: number;
  status: 'active' | 'expired' | 'discontinued';
  notes?: string;
}

interface BillingRecord {
  id: string;
  date: string;
  service: string;
  provider: string;
  amount: number;
  insuranceCovered: number;
  patientOwes: number;
  status: 'paid' | 'pending' | 'overdue' | 'processing';
  paymentMethod?: string;
}

interface InsuranceInfo {
  provider: string;
  policyNumber: string;
  groupNumber: string;
  copay: number;
  deductible: number;
  deductibleMet: number;
  status: 'active' | 'inactive' | 'pending';
  effectiveDate: string;
  expirationDate: string;
}

interface TreatmentPlan {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  provider: string;
  goals: string[];
  interventions: string[];
  progress: number;
  status: 'active' | 'completed' | 'on_hold';
  nextReview: string;
}

class MedicalRecordsAPI {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    // In production, these would be environment variables
    this.baseUrl = process.env.REACT_APP_EHR_API_URL || 'https://api.pyramid-aftercare.com';
    this.apiKey = process.env.REACT_APP_EHR_API_KEY || '';
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  // Medical Records
  async getMedicalRecords(patientId: string): Promise<MedicalRecord[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/records`);
    } catch (error) {
      console.error('Error fetching medical records:', error);
      // Return empty array instead of throwing to prevent portal crashes
      return [];
    }
  }

  async downloadMedicalRecord(recordId: string): Promise<Blob> {
    try {
      const response = await fetch(`${this.baseUrl}/records/${recordId}/download`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.blob();
    } catch (error) {
      console.error('Error downloading record:', error);
      throw error;
    }
  }

  // Prescriptions
  async getPrescriptions(patientId: string): Promise<Prescription[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/prescriptions`);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
      return [];
    }
  }

  async requestRefill(prescriptionId: string): Promise<boolean> {
    try {
      await this.makeRequest(`/prescriptions/${prescriptionId}/refill`, {
        method: 'POST',
      });
      return true;
    } catch (error) {
      console.error('Error requesting refill:', error);
      return false;
    }
  }

  // Billing
  async getBillingRecords(patientId: string): Promise<BillingRecord[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/billing`);
    } catch (error) {
      console.error('Error fetching billing records:', error);
      return [];
    }
  }

  async makePayment(recordId: string, amount: number, paymentMethod: string): Promise<boolean> {
    try {
      await this.makeRequest(`/billing/${recordId}/pay`, {
        method: 'POST',
        body: JSON.stringify({ amount, paymentMethod }),
      });
      return true;
    } catch (error) {
      console.error('Error processing payment:', error);
      return false;
    }
  }

  // Insurance
  async getInsuranceInfo(patientId: string): Promise<InsuranceInfo | null> {
    try {
      return await this.makeRequest(`/patients/${patientId}/insurance`);
    } catch (error) {
      console.error('Error fetching insurance info:', error);
      return null;
    }
  }

  async verifyInsurance(patientId: string): Promise<boolean> {
    try {
      const result = await this.makeRequest(`/patients/${patientId}/insurance/verify`, {
        method: 'POST',
      });
      return result.verified;
    } catch (error) {
      console.error('Error verifying insurance:', error);
      return false;
    }
  }

  // Treatment Plans
  async getTreatmentPlan(patientId: string): Promise<TreatmentPlan | null> {
    try {
      return await this.makeRequest(`/patients/${patientId}/treatment-plan`);
    } catch (error) {
      console.error('Error fetching treatment plan:', error);
      return null;
    }
  }

  // Secure Messaging
  async getMessages(patientId: string): Promise<any[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/messages`);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  }

  async sendMessage(patientId: string, subject: string, content: string, priority: string): Promise<boolean> {
    try {
      await this.makeRequest(`/patients/${patientId}/messages`, {
        method: 'POST',
        body: JSON.stringify({ subject, content, priority }),
      });
      return true;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }

  // Appointments (integrates with Google Calendar)
  async getAppointments(patientId: string): Promise<any[]> {
    try {
      return await this.makeRequest(`/patients/${patientId}/appointments`);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      return [];
    }
  }

  async requestAppointment(patientId: string, appointmentData: any): Promise<boolean> {
    try {
      await this.makeRequest(`/patients/${patientId}/appointments/request`, {
        method: 'POST',
        body: JSON.stringify(appointmentData),
      });
      return true;
    } catch (error) {
      console.error('Error requesting appointment:', error);
      return false;
    }
  }
}

export default new MedicalRecordsAPI();
export type { MedicalRecord, Prescription, BillingRecord, InsuranceInfo, TreatmentPlan };
