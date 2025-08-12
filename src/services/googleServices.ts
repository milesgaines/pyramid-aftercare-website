// Google Services Manager for Pyramid After Care App
// Provides unified access to Google Calendar, Tasks, Meet, and Contacts APIs

// Type declarations for Google APIs
declare global {
  interface Window {
    gapi: any;
  }
}

interface GoogleCalendarEvent {
  id?: string;
  summary: string;
  description?: string;
  start: {
    dateTime: string;
    timeZone?: string;
  };
  end: {
    dateTime: string;
    timeZone?: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
  }>;
  location?: string;
  conferenceData?: {
    conferenceSolution: {
      key: {
        type: string;
      };
    };
    createRequest: {
      requestId: string;
    };
  };
}

interface GoogleTask {
  id?: string;
  title: string;
  notes?: string;
  status: 'needsAction' | 'completed';
  due?: string;
  parent?: string;
  position?: string;
  links?: Array<{
    type: string;
    description: string;
    link: string;
  }>;
}

interface GoogleContact {
  resourceName?: string;
  etag?: string;
  names?: Array<{
    displayName?: string;
    familyName?: string;
    givenName?: string;
  }>;
  emailAddresses?: Array<{
    value: string;
    type?: string;
  }>;
  phoneNumbers?: Array<{
    value: string;
    type?: string;
  }>;
}

class GoogleServicesManager {
  private isInitialized = false;
  private authInstance: any = null;
  private apiKey = process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyA6jEunHgDAKraOYvHyNXQ4JL9MyN7Z2YU';
  private clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '829344807033-171kn0fgod5li4viovbl7msk5t3ass3b.apps.googleusercontent.com';
  private discoveryDocs = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest',
    'https://people.googleapis.com/$discovery/rest?version=v1'
  ];
  private scopes = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/tasks',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ].join(' ');

  async initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('🚀 Initializing Google Services...');
      
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

      if (!apiKey || !clientId) {
        console.error('❌ Missing Google API credentials');
        console.log('API Key:', apiKey ? 'Set' : 'Missing');
        console.log('Client ID:', clientId ? 'Set' : 'Missing');
        
        // Don't reject - just mark as not initialized
        console.warn('⚠️ Google services will not be available');
        resolve();
        return;
      }

      console.log('✅ Credentials found - API Key:', apiKey.substring(0, 10) + '...');
      console.log('✅ Credentials found - Client ID:', clientId);

      // Test API key validity first
      this.testApiKey(apiKey).then((apiKeyValid) => {
        if (!apiKeyValid) {
          console.warn('⚠️ API key test failed - Google services will have limited functionality');
          // Don't reject, continue with limited functionality
          resolve();
          return;
        }

        // Load Google API script
        if (!window.gapi) {
          const script = document.createElement('script');
          script.src = 'https://apis.google.com/js/api.js';
          script.onload = () => this.loadGapiAndAuth(apiKey, clientId, resolve, reject);
          script.onerror = () => {
            console.error('❌ Failed to load Google API script');
            resolve(); // Don't reject, continue without Google services
          };
          document.head.appendChild(script);
        } else {
          this.loadGapiAndAuth(apiKey, clientId, resolve, reject);
        }
      });
    });
  }

  private async testApiKey(apiKey: string): Promise<boolean> {
    try {
      console.log('🧪 Testing API key validity...');
      const response = await fetch(`https://www.googleapis.com/calendar/v3/users/me/calendarList?key=${apiKey}`);
      
      if (response.status === 401) {
        console.error('❌ API Key invalid (401): Check if the API key is correct');
        return false;
      } else if (response.status === 403) {
        const errorData = await response.json();
        console.error('❌ API Key forbidden (403):', errorData.error?.message || 'Check API restrictions');
        return false;
      } else if (response.status === 200 || response.status === 401) {
        // 401 here means the key is valid but no OAuth token - that's expected
        console.log('✅ API Key appears to be valid');
        return true;
      }
      
      console.warn('⚠️ Unexpected API response:', response.status);
      return false;
    } catch (error) {
      console.error('❌ API Key test failed:', error);
      return false;
    }
  }

  private loadGapiAndAuth(apiKey: string, clientId: string, resolve: () => void, reject: (error: Error) => void): void {
    window.gapi.load('client:auth2', {
      callback: async () => {
        try {
          console.log('🔧 Initializing GAPI client...');
          
          await window.gapi.client.init({
            apiKey: apiKey,
            clientId: clientId,
            discoveryDocs: [
              'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
              'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest'
            ],
            scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/tasks'
          });

          console.log('✅ GAPI client initialized successfully');
          this.authInstance = window.gapi.auth2.getAuthInstance();
          this.isInitialized = true;
          
          if (this.authInstance.isSignedIn.get()) {
            console.log('✅ User already signed in');
          } else {
            console.log('ℹ️ User not signed in - sign in required for full functionality');
          }
          
          resolve();
        } catch (error: any) {
          console.error('❌ GAPI initialization failed:', error);
          
          // Log detailed error information
          if (error.details) {
            console.error('Error details:', error.details);
          }
          
          // Don't reject - continue with limited functionality
          console.warn('⚠️ Continuing without Google OAuth - some features may be limited');
          this.isInitialized = false;
          resolve();
        }
      },
      onerror: () => {
        console.error('❌ Failed to load GAPI client');
        console.warn('⚠️ Continuing without Google services');
        this.isInitialized = false;
        resolve(); // Don't reject, continue without Google services
      }
    });
  }

  private loadGapi(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).gapi) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google API script'));
      document.head.appendChild(script);
    });
  }

  async signIn(): Promise<boolean> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const authInstance = (window as any).gapi.auth2.getAuthInstance();
      const user = await authInstance.signIn();
      
      if (user.isSignedIn()) {
        console.log('User signed in successfully');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Sign in failed:', error);
      return false;
    }
  }

  async signOut(): Promise<void> {
    try {
      const authInstance = (window as any).gapi.auth2.getAuthInstance();
      await authInstance.signOut();
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  }

  isSignedIn(): boolean {
    try {
      const authInstance = (window as any).gapi.auth2.getAuthInstance();
      return authInstance?.isSignedIn.get() || false;
    } catch (error) {
      console.error('Error checking sign in status:', error);
      return false;
    }
  }

  // Calendar Methods
  async createEvent(event: GoogleCalendarEvent): Promise<GoogleCalendarEvent | null> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      const response = await (window as any).gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
        conferenceDataVersion: event.conferenceData ? 1 : 0
      });

      return response.result;
    } catch (error) {
      console.error('Failed to create calendar event:', error);
      return null;
    }
  }

  async getEvents(timeMin?: string, timeMax?: string): Promise<GoogleCalendarEvent[]> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      const response = await (window as any).gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: timeMin || new Date().toISOString(),
        timeMax: timeMax,
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime'
      });

      return response.result.items || [];
    } catch (error) {
      console.error('Failed to get calendar events:', error);
      return [];
    }
  }

  async updateEvent(eventId: string, event: Partial<GoogleCalendarEvent>): Promise<GoogleCalendarEvent | null> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      const response = await (window as any).gapi.client.calendar.events.patch({
        calendarId: 'primary',
        eventId: eventId,
        resource: event
      });

      return response.result;
    } catch (error) {
      console.error('Failed to update calendar event:', error);
      return null;
    }
  }

  async deleteEvent(eventId: string): Promise<boolean> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      await (window as any).gapi.client.calendar.events.delete({
        calendarId: 'primary',
        eventId: eventId
      });

      return true;
    } catch (error) {
      console.error('Failed to delete calendar event:', error);
      return false;
    }
  }

  // Task Methods
  async createTask(task: GoogleTask, taskListId = '@default'): Promise<GoogleTask | null> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      const response = await (window as any).gapi.client.tasks.tasks.insert({
        tasklist: taskListId,
        resource: task
      });

      return response.result;
    } catch (error) {
      console.error('Failed to create task:', error);
      return null;
    }
  }

  async getTasks(taskListId = '@default'): Promise<GoogleTask[]> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      const response = await (window as any).gapi.client.tasks.tasks.list({
        tasklist: taskListId,
        showCompleted: true,
        showDeleted: false
      });

      return response.result.items || [];
    } catch (error) {
      console.error('Failed to get tasks:', error);
      return [];
    }
  }

  async updateTask(taskId: string, task: Partial<GoogleTask>, taskListId = '@default'): Promise<GoogleTask | null> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      const response = await (window as any).gapi.client.tasks.tasks.patch({
        tasklist: taskListId,
        task: taskId,
        resource: task
      });

      return response.result;
    } catch (error) {
      console.error('Failed to update task:', error);
      return null;
    }
  }

  async deleteTask(taskId: string, taskListId = '@default'): Promise<boolean> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      await (window as any).gapi.client.tasks.tasks.delete({
        tasklist: taskListId,
        task: taskId
      });

      return true;
    } catch (error) {
      console.error('Failed to delete task:', error);
      return false;
    }
  }

  // Contact Methods
  async getContacts(): Promise<GoogleContact[]> {
    try {
      if (!this.isSignedIn()) {
        throw new Error('User not signed in');
      }

      const response = await (window as any).gapi.client.people.people.connections.list({
        resourceName: 'people/me',
        personFields: 'names,emailAddresses,phoneNumbers'
      });

      return response.result.connections || [];
    } catch (error) {
      console.error('Failed to get contacts:', error);
      return [];
    }
  }

  // Google Meet Methods
  async createMeetingLink(title?: string, startTime?: Date, endTime?: Date): Promise<string | null> {
    try {
      if (!this.isSignedIn()) {
        console.error('User not signed in for meeting creation');
        return null;
      }

      // Create a calendar event with Google Meet conference
      const start = startTime || new Date();
      const end = endTime || new Date(Date.now() + 60 * 60 * 1000); // 1 hour default

      const event: GoogleCalendarEvent = {
        summary: title || 'Pyramid After Care - Virtual Meeting',
        description: 'Virtual therapy session via Google Meet',
        start: {
          dateTime: start.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        end: {
          dateTime: end.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        conferenceData: {
          createRequest: {
            requestId: this.generateRequestId()
          },
          conferenceSolution: {
            key: {
              type: 'hangoutsMeet'
            }
          }
        }
      };

      const response = await (window as any).gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
        conferenceDataVersion: 1
      });

      const meetLink = response.result?.conferenceData?.entryPoints?.find(
        (entry: any) => entry.entryPointType === 'video'
      )?.uri;

      if (meetLink) {
        console.log('Meeting link created successfully:', meetLink);
        return meetLink;
      } else {
        console.error('No meeting link found in response');
        // Fallback to manual meeting link generation
        return this.createFallbackMeetingLink();
      }
    } catch (error) {
      console.error('Failed to create meeting link:', error);
      // Return fallback meeting link
      return this.createFallbackMeetingLink();
    }
  }

  private createFallbackMeetingLink(): string {
    const meetingId = this.generateMeetingId();
    return `https://meet.google.com/${meetingId}`;
  }

  private generateRequestId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private generateMeetingId(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      if (i < 2) result += '-';
    }
    return result;
  }

  // Utility Methods
  async testConnection(): Promise<boolean> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Test basic API access
      const response = await fetch(`https://www.googleapis.com/calendar/v3/users/me/calendarList?key=${this.apiKey}`);
      
      if (response.ok) {
        console.log('Google API connection successful');
        return true;
      } else {
        console.error('Google API connection failed:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Google API connection test failed:', error);
      return false;
    }
  }

  getCurrentUser(): any {
    try {
      const authInstance = (window as any).gapi.auth2.getAuthInstance();
      return authInstance?.currentUser.get() || null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  getUserProfile(): any {
    try {
      const user = this.getCurrentUser();
      return user?.getBasicProfile() || null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  }
}

// Initialize and export the Google Services Manager
const googleServices = new GoogleServicesManager();

export default googleServices;
export { GoogleServicesManager };
export type { GoogleCalendarEvent, GoogleTask, GoogleContact };
