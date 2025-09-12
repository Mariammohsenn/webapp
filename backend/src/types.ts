export interface User {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

export interface AuthResponse {
  token: string;
}

export interface ProtectedResponse {
  message: string;
}