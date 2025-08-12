// Silent versions of all API services to prevent console errors

// Silent Medical Records API
export const silentMedicalRecordsApi = {
  async getMedicalRecords(patientId: string) {
    return {
      records: [
        {
          id: '1',
          date: '2024-01-15',
          type: 'Progress Note',
          provider: 'Dr. Smith',
          summary: 'Patient showing excellent progress in recovery program',
          attachments: ['progress_report_jan.pdf']
        }
      ]
    };
  },

  async downloadRecord(recordId: string) {
    // Silent download - return demo URL
    return { downloadUrl: 'https://demo.pyramid-aftercare.com/records/demo.pdf' };
  },

  async getPrescriptions(patientId: string) {
    return {
      prescriptions: [
        {
          id: '1',
          medication: 'Suboxone',
          dosage: '8mg daily',
          prescriber: 'Dr. Smith',
          dateIssued: '2024-01-15',
          refillsRemaining: 2,
          instructions: 'Take once daily with food'
        }
      ]
    };
  },

  async requestRefill(prescriptionId: string) {
    return { success: true, message: 'Refill request submitted successfully' };
  },

  async getBillingRecords(patientId: string) {
    return {
      bills: [
        {
          id: '1',
          date: '2024-01-15',
          description: 'Individual Therapy Session',
          amount: 150.00,
          status: 'paid',
          dueDate: '2024-01-30'
        }
      ]
    };
  },

  async processPayment(paymentData: any) {
    return { success: true, transactionId: 'demo_txn_123' };
  },

  async getInsuranceInfo(patientId: string) {
    return {
      provider: 'Blue Cross Blue Shield',
      memberId: 'DEMO123456',
      groupNumber: 'GRP789',
      copay: 25,
      deductible: 500,
      status: 'active'
    };
  },

  async verifyInsurance(insuranceData: any) {
    return { verified: true, benefits: { copay: 25, covered: true } };
  },

  async getTreatmentPlan(patientId: string) {
    return {
      plan: {
        goals: ['Maintain sobriety', 'Develop coping strategies'],
        sessions: 12,
        frequency: 'Weekly',
        startDate: '2024-01-01',
        provider: 'Dr. Smith'
      }
    };
  },

  async getMessages(patientId: string) {
    return {
      messages: [
        {
          id: '1',
          from: 'Dr. Smith',
          subject: 'Weekly Check-in',
          content: 'How are you feeling this week?',
          date: '2024-01-15',
          read: false
        }
      ]
    };
  },

  async sendMessage(messageData: any) {
    return { success: true, messageId: 'demo_msg_123' };
  },

  async getAppointments(patientId: string) {
    return {
      appointments: [
        {
          id: '1',
          date: '2024-01-22',
          time: '10:00 AM',
          provider: 'Dr. Smith',
          type: 'Individual Therapy',
          status: 'scheduled'
        }
      ]
    };
  },

  async requestAppointment(appointmentData: any) {
    return { success: true, appointmentId: 'demo_appt_123' };
  }
};

// Silent Payment Service
export const silentPaymentService = {
  async getPaymentMethods(patientId: string) {
    return {
      paymentMethods: [
        {
          id: '1',
          type: 'card',
          last4: '4242',
          brand: 'visa',
          expiryMonth: 12,
          expiryYear: 2025,
          isDefault: true
        }
      ]
    };
  },

  async addPaymentMethod(paymentMethodData: any) {
    return { success: true, paymentMethodId: 'demo_pm_123' };
  },

  async removePaymentMethod(paymentMethodId: string) {
    return { success: true };
  },

  async setDefaultPaymentMethod(paymentMethodId: string) {
    return { success: true };
  },

  async createPaymentIntent(amount: number, currency = 'usd') {
    return {
      clientSecret: 'demo_pi_123_secret_456',
      paymentIntentId: 'demo_pi_123'
    };
  },

  async confirmPayment(paymentIntentId: string, paymentMethodId: string) {
    return { success: true, status: 'succeeded' };
  },

  async processPayment(paymentData: any) {
    return { 
      success: true, 
      transactionId: 'demo_txn_' + Date.now(),
      amount: paymentData.amount,
      status: 'completed'
    };
  }
};

// Silent Admin Portal API
export const silentAdminPortalApi = {
  async getPatients() {
    return {
      patients: [
        {
          id: '1',
          name: 'John Doe',
          email: 'john.doe@email.com',
          phone: '(555) 123-4567',
          dateOfBirth: '1990-01-15',
          lastVisit: '2024-01-15',
          status: 'active',
          treatmentPlan: 'Standard Recovery Program'
        }
      ]
    };
  },

  async addPatient(patientData: any) {
    return { success: true, patientId: 'demo_patient_' + Date.now() };
  },

  async updatePatient(patientId: string, updates: any) {
    return { success: true };
  },

  async getAppointments() {
    return {
      appointments: [
        {
          id: '1',
          patientName: 'John Doe',
          date: '2024-01-22',
          time: '10:00 AM',
          provider: 'Dr. Smith',
          type: 'Individual Therapy',
          status: 'scheduled'
        }
      ]
    };
  },

  async scheduleAppointment(appointmentData: any) {
    return { success: true, appointmentId: 'demo_appt_' + Date.now() };
  },

  async updateAppointmentStatus(appointmentId: string, status: string) {
    return { success: true };
  },

  async getStaff() {
    return {
      staff: [
        {
          id: '1',
          name: 'Dr. Smith',
          role: 'Therapist',
          email: 'dr.smith@pyramid.com',
          phone: '(555) 987-6543',
          specialties: ['Addiction Counseling', 'Group Therapy']
        }
      ]
    };
  },

  async addStaffMember(staffData: any) {
    return { success: true, staffId: 'demo_staff_' + Date.now() };
  },

  async getTreatmentPlans() {
    return {
      plans: [
        {
          id: '1',
          name: 'Standard Recovery Program',
          duration: '12 weeks',
          sessionsPerWeek: 2,
          description: 'Comprehensive aftercare program'
        }
      ]
    };
  },

  async createTreatmentPlan(planData: any) {
    return { success: true, planId: 'demo_plan_' + Date.now() };
  },

  async getReports() {
    return {
      reports: {
        totalPatients: 45,
        activePatients: 38,
        completedSessions: 156,
        upcomingAppointments: 12,
        monthlyRevenue: 15500
      }
    };
  },

  async generateReport(reportType: string, dateRange: any) {
    return { 
      success: true, 
      reportUrl: 'https://demo.pyramid-aftercare.com/reports/demo.pdf' 
    };
  }
};
