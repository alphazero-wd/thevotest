import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';

export class SignupDto {
  @Length(1, 30)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
