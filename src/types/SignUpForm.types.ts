export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  data?: {
    message?: string;
    Status?: string; // Assuming the backend response contains a status field
  };
  error?: any;
}
