import { gapi } from 'gapi-script';

export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  role: 'admin' | 'therapist' | 'patient';
}

class AuthService {
  private static instance: AuthService;
  private isInitialized = false;
  private currentUser: User | null = null;
  private tokenClient: any = null;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      console.log('🔵 Initializing authService...');
      console.log('🔵 Google Client ID:', process.env.REACT_APP_GOOGLE_CLIENT_ID);
      
      // Initialize GAPI with timeout
      await Promise.race([
        new Promise<void>((resolve, reject) => {
          gapi.load('auth2', {
            callback: () => {
              console.log('🔵 GAPI auth2 loaded successfully');
              resolve();
            },
            onerror: (error: any) => {
              console.error('🔴 GAPI auth2 load failed:', error);
              reject(error);
            },
          });
        }),
        new Promise<void>((_, reject) => {
          setTimeout(() => reject(new Error('GAPI load timeout')), 5000);
        })
      ]);

      await gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: [
          'https://www.googleapis.com/auth/calendar',
          'https://www.googleapis.com/auth/contacts.readonly',
          'https://www.googleapis.com/auth/tasks',
          'profile',
          'email'
        ].join(' '),
        hosted_domain: undefined,
        plugin_name: 'pyramid-aftercare'
      });

      console.log('🔵 AuthService initialized successfully');
      this.isInitialized = true;
    } catch (error) {
      console.error('🔴 Failed to initialize auth service:', error);
      // Don't throw error - allow app to continue without Google Auth
      console.log('🔵 Continuing without Google Auth - app will still work with basic auth');
      this.isInitialized = true;
    }
  }

  async signIn(): Promise<User> {
    console.log('🔵 SignIn method called');
    
    if (!this.isInitialized) {
      console.log('🔵 Not initialized, initializing first...');
      await this.initialize();
    }

    try {
      console.log('🔵 Getting auth instance...');
      const authInstance = gapi.auth2.getAuthInstance();
      console.log('🔵 Auth instance:', authInstance);
      
      if (!authInstance) {
        throw new Error('Google Auth instance not available. Please check your internet connection and try again.');
      }
      
      console.log('🔵 Calling authInstance.signIn()...');
      const googleUser = await authInstance.signIn();
      console.log('🔵 Google user received:', googleUser);
      
      const profile = googleUser.getBasicProfile();
      const email = profile.getEmail();
      
      console.log('🔵 User email:', email);
      
      // Determine user role based on email domain or admin list
      const role = this.determineUserRole(email);
      console.log('🔵 User role determined:', role);
      
      const user: User = {
        id: profile.getId(),
        email: email,
        name: profile.getName(),
        picture: profile.getImageUrl(),
        role: role
      };

      console.log('🔵 User object created:', user);
      this.currentUser = user;
      localStorage.setItem('pyramid_user', JSON.stringify(user));
      
      return user;
    } catch (error: any) {
      console.error('🔴 Sign in failed:', error);
      
      // If Google sign-in fails, provide a helpful error message
      if (error?.error === 'popup_blocked_by_browser') {
        throw new Error('Sign-in popup was blocked. Please allow popups for this site and try again.');
      } else if (error?.error === 'access_denied') {
        throw new Error('Sign-in was cancelled. Please try again.');
      } else {
        throw new Error('Google sign-in failed. Please check your internet connection and try again.');
      }
    }
  }

  async signOut(): Promise<void> {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      await authInstance.signOut();
      this.currentUser = null;
      localStorage.removeItem('pyramid_user');
    } catch (error) {
      console.error('Sign out failed:', error);
      throw error;
    }
  }

  getCurrentUser(): User | null {
    if (this.currentUser) {
      return this.currentUser;
    }

    const stored = localStorage.getItem('pyramid_user');
    if (stored) {
      this.currentUser = JSON.parse(stored);
      return this.currentUser;
    }

    return null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  canAccessAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin' || user?.role === 'therapist';
  }

  canAccessPatient(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'patient';
  }

  private determineUserRole(email: string): 'admin' | 'therapist' | 'patient' {
    // Define admin emails - replace with your actual admin emails
    const adminEmails = [
      'admin@pyramidaftercare.com',
      'director@pyramidaftercare.com',
      'milesgaines@gmail.com', // Your email as admin for testing
      // Add your admin emails here
    ];

    // Define therapist email patterns or specific emails
    const therapistEmails = [
      'therapist@pyramidaftercare.com',
      // Add therapist emails here
    ];

    if (adminEmails.includes(email.toLowerCase())) {
      return 'admin';
    }

    if (therapistEmails.includes(email.toLowerCase()) || email.includes('therapist')) {
      return 'therapist';
    }

    // Default to patient for all other users
    return 'patient';
  }

  async getAccessToken(): Promise<string> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    const authInstance = gapi.auth2.getAuthInstance();
    const user = authInstance.currentUser.get();
    
    if (!user.isSignedIn()) {
      throw new Error('User not signed in');
    }

    return user.getAuthResponse().access_token;
  }
}

export default AuthService.getInstance();
