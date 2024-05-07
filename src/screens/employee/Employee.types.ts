export interface EmployeeFormData {
  id: number;
  employee_id: number;
  personal_number: string;
  first_name: string;
  last_name: string;
  bank: string;
  bank_account_number: string;
  IFSC: string;
  date_of_joining: string;
  location: string;
  department: string;
  designation: string;
  email: string;
  project: string;
  employee_type: string;
  gender: string;
  date_of_birth: string;
  panCard: string;
  aadharCard: string;
  manager_id: number;
  supervisor_id: number;
  country: string;
  state: string;
  zipcode: string;
  supervisor_name: string;
  manager_name: string;
  total_experience: number;
  marital_status: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  emergency_contact_relationship: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  emergency_contact_email: string;
  passport_number: string;
  passport_expiry_date: string;
  driving_license_number: string;
  driving_license_expiry_date: string;
  educational_qualification: string;
  bank_branch: string;
  bank_branch_address: string;
  password: string;
}

export interface CreatedEmployeeResponse {
  data?: {
    Status: string;
    code: string;
    createdUserData: {
      employee_id: number;
      personal_number: string;
      first_name: string;
      last_name: string;
      bank: string;
      bank_account_number: string;
      IFSC: string;
      date_of_joining: string;
      location: string;
      department: string;
      designation: string;
      email: string;
      project: string;
      employee_type: string;
      gender: string;
      date_of_birth: string;
      panCard: string;
      aadharCard: string;
      manager_id: number;
      supervisor_id: number;
      country: string;
      state: string;
      zipcode: string;
      supervisor_name: string;
      manager_name: string;
      total_experience: number;
      marital_status: string;
      emergency_contact_name: string;
      emergency_contact_number: string;
      emergency_contact_relationship: string;
      address_line_1: string;
      address_line_2: string;
      city: string;
      emergency_contact_email: string;
      passport_number: string;
      passport_expiry_date: string;
      driving_license_number: string;
      driving_license_expiry_date: string;
      educational_qualification: string;
      bank_branch: string;
      bank_branch_address: string;
      password: string;
    };
    message: string;
  };
  error?: {
    message: string;
    status: string;
    code: number;
  };
}

export interface EmployeeDeleteResponse {
  data?: {
    message: string;
    status: string;
    code: string;
  };
  error?: {
    data?: {
      message: string;
    };
    status: number;
  };
}
