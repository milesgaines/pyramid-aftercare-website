import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface UserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'patient' | 'admin' | 'provider'
  phoneNumber?: string
  dateOfBirth?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  insurance?: {
    provider: string
    memberId: string
    groupNumber: string
  }
  isActive: boolean
  createdAt: string
  lastLogin?: string
}

export interface Appointment {
  id: string
  patientId: string
  providerId: string
  title: string
  description?: string
  startTime: string
  endTime: string
  type: 'individual' | 'group' | 'virtual'
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show'
  meetingUrl?: string
  meetingId?: string
  createdAt: string
  updatedAt: string
}

export interface InsuranceVerification {
  id: string
  patientId: string
  provider: string
  memberId: string
  groupNumber?: string
  status: 'pending' | 'verified' | 'rejected'
  benefits?: {
    copay: number
    deductible: number
    outOfPocket: number
    coverage: string
  }
  verifiedAt?: string
  createdAt: string
}

export interface TreatmentProgress {
  id: string
  patientId: string
  providerId: string
  sessionDate: string
  sessionType: 'individual' | 'group'
  notes: string
  goals: string[]
  progress: number
  nextSteps: string
  createdAt: string
}
