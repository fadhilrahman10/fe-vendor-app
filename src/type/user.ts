export type LoginRequest = {
  email: string;
  password: string;
}

export type UserResponse = {
  email: string;
  name: string;
  token?: string | null;
}
