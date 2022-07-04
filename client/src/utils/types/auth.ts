export interface SignupDto {
  username: string;
  email: string;
  password: string;
}

export type LoginDto = Omit<SignupDto, "username">;
