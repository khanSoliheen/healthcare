export interface BloodPressure {
    value: number;
    levels: string;
  }
  
  export interface HeartRate {
    value: number;
    levels: string;
  }
  
  export interface RespiratoryRate {
    value: number;
    levels: string;
  }
  
  export interface Temperature {
    value: number;
    levels: string;
  }
  
  export interface Diagnosis {
    month: string;
    year: number;
    blood_pressure: {
      systolic: BloodPressure;
      diastolic: BloodPressure;
    };
    heart_rate: HeartRate;
    respiratory_rate: RespiratoryRate;
    temperature: Temperature;
  }
  
  export interface Diagnostic {
    name: string;
    description: string;
    status: string;
  }
  
  export interface Patient {
    id: string;
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
    diagnosis_history: Diagnosis[];
    diagnostic_list: Diagnostic[];
    lab_results: string[];
  }