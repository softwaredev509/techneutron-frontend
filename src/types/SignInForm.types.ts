export interface User {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  data?: {
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
  };
  error?: {
    status: number,
    data:{
      error: string
    }
  }
}
