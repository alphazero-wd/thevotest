import * as argon from 'argon2';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup({ password, ...dto }: SignupDto) {
    try {
      const hash = await argon.hash(password);
      const user = await this.prisma.user.create({
        data: {
          password: hash,
          ...dto,
        },
        select: {
          id: true,
          username: true,
          createdAt: true,
        },
      });
      return user;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002')
          throw new ForbiddenException('User already exists.');
      }
      throw e;
    }
  }

  async login({ email, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new ForbiddenException('User does not exist.');

    const isCorrectPassword = await argon.verify(user.password, password);
    if (!isCorrectPassword) throw new ForbiddenException('Incorrect Password.');
    return {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt,
    };
  }

  createAccessToken(userId: number) {
    const access_token = this.jwt.sign(
      { sub: userId },
      {
        expiresIn: '1d',
        secret: this.config.get('JWT_ACCESS_SECRET'),
      },
    );
    return { access_token };
  }
}
