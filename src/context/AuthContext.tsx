import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'patient' | 'admin' | 'provider';
  isActive: boolean;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  insurance?: {
    provider: string;
    memberId: string;
    groupNumber: string;
  };
  createdAt: string;
  lastLogin?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  updateUser: (updates: Partial<User>) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          await loadUserProfile(session.user.id);
        } else {
          // Check for demo user in localStorage as fallback
          const savedUser = localStorage.getItem('pyramid_user');
          if (savedUser) {
            try {
              const userData = JSON.parse(savedUser);
              setUser(userData);
            } catch (error) {
              console.error('Error parsing saved user data:', error);
              localStorage.removeItem('pyramid_user');
            }
          }
        }
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        await loadUserProfile(session.user.id);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        localStorage.removeItem('pyramid_user');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserProfile = async (userId: string) => {
    try {
      const { data: profile, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error loading user profile:', error);
        return;
      }

      if (profile) {
        const userData: User = {
          id: profile.id,
          email: profile.email,
          firstName: profile.first_name,
          lastName: profile.last_name,
          role: profile.role,
          isActive: profile.is_active,
          phoneNumber: profile.phone_number,
          dateOfBirth: profile.date_of_birth,
          address: profile.address,
          insurance: profile.insurance,
          createdAt: profile.created_at,
          lastLogin: profile.last_login,
        };
        setUser(userData);

        // Update last login
        await supabase
          .from('user_profiles')
          .update({ last_login: new Date().toISOString() })
          .eq('id', userId);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);
        // Fall back to demo accounts for development
        const demoUser = getDemoUser(email, password);
        if (demoUser) {
          setUser(demoUser);
          localStorage.setItem('pyramid_user', JSON.stringify(demoUser));
          return true;
        }
        return false;
      }

      if (data.user) {
        await loadUserProfile(data.user.id);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      localStorage.removeItem('pyramid_user');
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout even if Supabase fails
      setUser(null);
      localStorage.removeItem('pyramid_user');
    }
  };

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: userData.email!,
        password: userData.password,
      });

      if (authError) {
        console.error('Registration error:', authError);
        return false;
      }

      if (authData.user) {
        // Create user profile
        const profileData = {
          id: authData.user.id,
          email: userData.email,
          first_name: userData.firstName,
          last_name: userData.lastName,
          role: userData.role || 'patient',
          phone_number: userData.phoneNumber,
          date_of_birth: userData.dateOfBirth,
          address: userData.address,
          insurance: userData.insurance,
          is_active: true,
          created_at: new Date().toISOString(),
        };

        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([profileData]);

        if (profileError) {
          console.error('Profile creation error:', profileError);
          return false;
        }

        return true;
      }

      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (updates: Partial<User>): Promise<boolean> => {
    if (!user) return false;

    try {
      const updateData = {
        first_name: updates.firstName,
        last_name: updates.lastName,
        phone_number: updates.phoneNumber,
        date_of_birth: updates.dateOfBirth,
        address: updates.address,
        insurance: updates.insurance,
      };

      const { error } = await supabase
        .from('user_profiles')
        .update(updateData)
        .eq('id', user.id);

      if (error) {
        console.error('Update error:', error);
        return false;
      }

      setUser({ ...user, ...updates });
      return true;
    } catch (error) {
      console.error('Update error:', error);
      return false;
    }
  };

  // Demo users fallback for development
  const getDemoUser = (email: string, password: string): User | null => {
    const demoUsers: { [key: string]: { password: string; user: User } } = {
      'patient@example.com': {
        password: 'password123',
        user: {
          id: 'demo-patient-1',
          email: 'patient@example.com',
          firstName: 'John',
          lastName: 'Doe',
          role: 'patient',
          isActive: true,
          phoneNumber: '+1-555-0123',
          dateOfBirth: '1990-01-15',
          address: {
            street: '123 Main St',
            city: 'Boston',
            state: 'MA',
            zipCode: '02101'
          },
          insurance: {
            provider: 'Blue Cross Blue Shield',
            memberId: 'BC123456789',
            groupNumber: 'GRP001'
          },
          createdAt: '2024-01-01T00:00:00.000Z',
          lastLogin: new Date().toISOString()
        }
      },
      'admin@example.com': {
        password: 'password123',
        user: {
          id: 'demo-admin-1',
          email: 'admin@example.com',
          firstName: 'Sarah',
          lastName: 'Admin',
          role: 'admin',
          isActive: true,
          phoneNumber: '+1-555-0124',
          createdAt: '2024-01-01T00:00:00.000Z',
          lastLogin: new Date().toISOString()
        }
      },
      'provider@example.com': {
        password: 'password123',
        user: {
          id: 'demo-provider-1',
          email: 'provider@example.com',
          firstName: 'Dr. Sarah',
          lastName: 'Johnson',
          role: 'provider',
          isActive: true,
          phoneNumber: '+1-555-0125',
          createdAt: '2024-01-01T00:00:00.000Z',
          lastLogin: new Date().toISOString()
        }
      }
    };

    const demo = demoUsers[email];
    if (demo && demo.password === password) {
      return demo.user;
    }
    return null;
  };

  const isAuthenticated = !!user;

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
