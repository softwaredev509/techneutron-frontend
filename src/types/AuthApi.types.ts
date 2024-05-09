export interface CreateUserType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface CreateUserResponseType {
  message?: string;
  status?: string | number;
  data?: string;
}

export interface LogUserType {
  email: string;
  password: string;
}

export interface LogUserResponseType {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  message: string;
  error?: string;
  
}
