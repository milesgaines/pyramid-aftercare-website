// Zoom API integration service for PYRAMID AFTER CARE

export interface ZoomMeeting {
  id: string;
  topic: string;
  type: number; // 1=instant, 2=scheduled, 3=recurring no fixed, 8=recurring fixed
  status: string;
  start_time: string;
  duration: number;
  timezone: string;
  agenda: string;
  created_at: string;
  start_url: string;
  join_url: string;
  password: string;
  encrypted_password: string;
  settings: ZoomMeetingSettings;
  host_id: string;
  host_email: string;
}

export interface ZoomMeetingSettings {
  host_video: boolean;
  participant_video: boolean;
  cn_meeting: boolean;
  in_meeting: boolean;
  join_before_host: boolean;
  jbh_time: number;
  mute_upon_entry: boolean;
  watermark: boolean;
  use_pmi: boolean;
  approval_type: number;
  audio: string;
  auto_recording: string;
  enforce_login: boolean;
  enforce_login_domains: string;
  alternative_hosts: string;
  close_registration: boolean;
  show_share_button: boolean;
  allow_multiple_devices: boolean;
  registrants_confirmation_email: boolean;
  waiting_room: boolean;
  request_permission_to_unmute_participants: boolean;
  global_dial_in_countries: string[];
  global_dial_in_numbers: any[];
  contact_name: string;
  contact_email: string;
  registrants_email_notification: boolean;
  meeting_authentication: boolean;
  authentication_option: string;
  authentication_domains: string;
  authentication_name: string;
  product_type: number;
  record_play_own_voice: boolean;
  voice_activation: boolean;
  dial_in_search_by_name: boolean;
  personal_meeting: boolean;
}

export interface CreateMeetingRequest {
  topic: string;
  type?: number;
  start_time?: string;
  duration?: number;
  timezone?: string;
  password?: string;
  agenda?: string;
  settings?: Partial<ZoomMeetingSettings>;
}

export interface ZoomUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  type: number;
  role_name: string;
  pmi: number;
  use_pmi: boolean;
  timezone: string;
  verified: number;
  dept: string;
  created_at: string;
  last_login_time: string;
  last_client_version: string;
  language: string;
  phone_country: string;
  phone_number: string;
  status: string;
}

class ZoomService {
  private apiKey: string;
  private apiSecret: string;
  private accessToken: string | null = null;

  constructor() {
    // In production, these would come from environment variables
    this.apiKey = process.env.REACT_APP_ZOOM_API_KEY || '';
    this.apiSecret = process.env.REACT_APP_ZOOM_API_SECRET || '';
    
    // For demo purposes, we'll use mock responses
    console.warn('Using mock Zoom service for demonstration');
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken) {
      return this.accessToken;
    }

    // In production, implement OAuth 2.0 flow
    // For demo, return mock token
    this.accessToken = 'mock_access_token';
    return this.accessToken;
  }

  private async makeRequest(endpoint: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET', data?: any) {
    // const token = await this.getAccessToken();
    
    // For demo purposes, return mock data instead of making real API calls
    return this.getMockResponse(endpoint, method, data);
  }

  private getMockResponse(endpoint: string, method: string, data?: any): ZoomMeeting | ZoomUser | ZoomMeeting[] {
    // Mock responses for demonstration
    if (endpoint.includes('/meetings') && method === 'POST') {
      return this.createMockMeeting(data);
    } else if (endpoint.includes('/meetings') && method === 'GET') {
      return this.getMockMeetings();
    } else if (endpoint.includes('/users/me')) {
      return this.getMockUser();
    }
    
    throw new Error(`Mock endpoint not implemented: ${endpoint}`);
  }

  private createMockMeeting(data: CreateMeetingRequest): ZoomMeeting {
    const meetingId = Math.random().toString(36).substr(2, 9);
    const password = Math.random().toString(36).substr(2, 8);
    
    return {
      id: meetingId,
      topic: data.topic || 'PYRAMID AFTER CARE - Therapy Session',
      type: data.type || 2,
      status: 'waiting',
      start_time: data.start_time || new Date().toISOString(),
      duration: data.duration || 60,
      timezone: data.timezone || 'America/New_York',
      agenda: data.agenda || 'Confidential therapy session via secure video call',
      created_at: new Date().toISOString(),
      start_url: `https://zoom.us/s/${meetingId}?role=1&pwd=${password}`,
      join_url: `https://zoom.us/j/${meetingId}?pwd=${password}`,
      password: password,
      encrypted_password: password,
      host_id: 'mock_host_id',
      host_email: 'provider@pyramidaftercare.com',
      settings: {
        host_video: true,
        participant_video: true,
        cn_meeting: false,
        in_meeting: false,
        join_before_host: false,
        jbh_time: 0,
        mute_upon_entry: true,
        watermark: false,
        use_pmi: false,
        approval_type: 2,
        audio: 'both',
        auto_recording: 'local',
        enforce_login: false,
        enforce_login_domains: '',
        alternative_hosts: '',
        close_registration: false,
        show_share_button: false,
        allow_multiple_devices: true,
        registrants_confirmation_email: true,
        waiting_room: true,
        request_permission_to_unmute_participants: false,
        global_dial_in_countries: ['US'],
        global_dial_in_numbers: [],
        contact_name: 'PYRAMID AFTER CARE',
        contact_email: 'support@pyramidaftercare.com',
        registrants_email_notification: true,
        meeting_authentication: false,
        authentication_option: '',
        authentication_domains: '',
        authentication_name: '',
        product_type: 1,
        record_play_own_voice: false,
        voice_activation: false,
        dial_in_search_by_name: false,
        personal_meeting: false,
      }
    };
  }

  private getMockMeetings(): ZoomMeeting[] {
    return [
      this.createMockMeeting({
        topic: 'Individual Therapy Session',
        start_time: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        duration: 50
      }),
      this.createMockMeeting({
        topic: 'Group Therapy Session',
        start_time: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        duration: 90
      })
    ];
  }

  private getMockUser(): ZoomUser {
    return {
      id: 'mock_user_id',
      first_name: 'Dr. Sarah',
      last_name: 'Johnson',
      email: 'dr.johnson@pyramidaftercare.com',
      type: 2,
      role_name: 'Owner',
      pmi: 1234567890,
      use_pmi: false,
      timezone: 'America/New_York',
      verified: 1,
      dept: 'Clinical Services',
      created_at: '2024-01-01T00:00:00Z',
      last_login_time: new Date().toISOString(),
      last_client_version: '5.15.2.4010',
      language: 'en-US',
      phone_country: 'US',
      phone_number: '+1 555-123-4567',
      status: 'active'
    };
  }

  // Public API methods
  async createMeeting(userId: string, meetingData: CreateMeetingRequest): Promise<ZoomMeeting> {
    const response = await this.makeRequest(`/users/${userId}/meetings`, 'POST', meetingData);
    return response as ZoomMeeting;
  }

  async getMeeting(meetingId: string): Promise<ZoomMeeting> {
    const response = await this.makeRequest(`/meetings/${meetingId}`, 'GET');
    return response as ZoomMeeting;
  }

  async updateMeeting(meetingId: string, meetingData: Partial<CreateMeetingRequest>): Promise<void> {
    await this.makeRequest(`/meetings/${meetingId}`, 'PATCH', meetingData);
  }

  async deleteMeeting(meetingId: string): Promise<void> {
    await this.makeRequest(`/meetings/${meetingId}`, 'DELETE');
  }

  async listMeetings(userId: string): Promise<{ meetings: ZoomMeeting[] }> {
    const response = await this.makeRequest(`/users/${userId}/meetings`, 'GET');
    const meetings = response as ZoomMeeting[];
    return { meetings };
  }

  async getCurrentUser(): Promise<ZoomUser> {
    const response = await this.makeRequest('/users/me', 'GET');
    return response as ZoomUser;
  }

  // Healthcare-specific meeting configurations
  createTherapySessionMeeting(patientName: string, appointmentTime: string, duration: number = 50): Promise<ZoomMeeting> {
    const meetingConfig: CreateMeetingRequest = {
      topic: `Therapy Session - ${patientName}`,
      type: 2, // Scheduled meeting
      start_time: appointmentTime,
      duration: duration,
      password: this.generateSecurePassword(),
      agenda: 'Confidential therapy session - HIPAA compliant',
      settings: {
        host_video: true,
        participant_video: true,
        mute_upon_entry: true,
        waiting_room: true,
        join_before_host: false,
        auto_recording: 'local', // For clinical documentation
        meeting_authentication: true,
        request_permission_to_unmute_participants: true,
        allow_multiple_devices: false, // Security measure
        watermark: false,
        show_share_button: false,
      }
    };

    return this.createMeeting('me', meetingConfig);
  }

  createGroupTherapyMeeting(groupName: string, appointmentTime: string, duration: number = 90): Promise<ZoomMeeting> {
    const meetingConfig: CreateMeetingRequest = {
      topic: `Group Therapy - ${groupName}`,
      type: 2,
      start_time: appointmentTime,
      duration: duration,
      password: this.generateSecurePassword(),
      agenda: 'Group therapy session - Confidential',
      settings: {
        host_video: true,
        participant_video: true,
        mute_upon_entry: true,
        waiting_room: true,
        join_before_host: false,
        auto_recording: 'local',
        meeting_authentication: true,
        request_permission_to_unmute_participants: true,
        allow_multiple_devices: false,
        watermark: false,
      }
    };

    return this.createMeeting('me', meetingConfig);
  }

  private generateSecurePassword(): string {
    // Generate a secure 8-character password
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  // Utility method to format meeting link for patients
  formatPatientMeetingInfo(meeting: ZoomMeeting) {
    return {
      meetingId: meeting.id,
      joinUrl: meeting.join_url,
      password: meeting.password,
      startTime: meeting.start_time,
      duration: meeting.duration,
      topic: meeting.topic,
      instructions: `
        Join your secure therapy session:
        1. Click the meeting link at your appointment time
        2. Enter the meeting password when prompted
        3. Enable your camera and microphone
        4. Wait for your therapist to admit you from the waiting room
        
        Meeting ID: ${meeting.id}
        Password: ${meeting.password}
        
        For technical support, call: (555) 123-TECH
      `
    };
  }
}

export const zoomService = new ZoomService();
export default zoomService;
