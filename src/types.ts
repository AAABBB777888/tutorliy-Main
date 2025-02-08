export interface TuitionJob {
  id: string;
  location: string;
  studentClass: string;
  preferredTutorGender: 'Male' | 'Female' | 'Any';
  salaryRange: string;
  tutorType: 'Bangla Medium' | 'English Version' | 'English Medium' | 'Premium Tuition';
  studentGender: string;
  studyCategory: string;
  classLevel: string;
  numberOfStudents: number;
  preferredTime: string;
  daysPerWeek: number;
  demoClassDate: string;
  clientName: string;
  clientPhone: string;
}

export interface User {
  credits: number;
}

export interface CreditPackage {
  id: string;
  name: string;
  price: number;
  credits: number;
  tutorTypes: string[];
  salaryRange: string;
  color: string;
}