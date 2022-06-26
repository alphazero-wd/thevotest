import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { INestApplication } from '@nestjs/common';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, SignupDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('AuthController', () => {
  let prisma: PrismaService;
  let controller: AuthController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        JwtStrategy,
        PrismaService,
        JwtService,
        ConfigService,
      ],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    controller = module.get<AuthController>(AuthController);
    await prisma.reset();
  });

  describe('signup controller test', () => {
    it('should signup', async () => {
      const dto: SignupDto = {
        username: 'a',
        email: 'a@a.com',
        password: '123',
      };

      const { access_token } = await controller.signup(dto);
      const users = await prisma.user.findMany();
      expect(access_token).toBeDefined();
      expect(users.length).toBe(1);
    });

    it('should throw an exception when user already exists.', async () => {
      const dto: SignupDto = {
        username: 'a',
        email: 'a@a.com',
        password: '123',
      };

      await controller
        .signup(dto)
        .then(({ access_token }) => expect(access_token).toBeUndefined())
        .catch((e) => expect(e.message).toBe('User already exists.'));

      const users = await prisma.user.findMany();

      expect(users.length).toBe(1);
    });
  });

  describe('login controller test', () => {
    it('should throw exception when user does not exist.', async () => {
      const dto: LoginDto = {
        email: 'a@B.com',
        password: '123',
      };

      await controller
        .login(dto)
        .then(({ access_token }) => expect(access_token).toBeUndefined())
        .catch((e) => expect(e.message).toBe('User does not exist.'));
    });

    it("should throw exception when user's password is incorrect.", async () => {
      const dto: LoginDto = {
        email: 'a@a.com',
        password: '122',
      };

      await controller
        .login(dto)
        .then(({ access_token }) => expect(access_token).toBeUndefined())
        .catch((e) => expect(e.message).toBe('Incorrect Password.'));
    });

    it('should login', async () => {
      const dto: LoginDto = {
        email: 'a@a.com',
        password: '123',
      };
      expect(await controller.login(dto)).toBeDefined();
    });
  });
});
