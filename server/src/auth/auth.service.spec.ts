import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto/create-user.dto';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, JwtService, ConfigService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    await prisma.reset();
  });

  describe('signup service test', () => {
    it('should signup', async () => {
      const dto: SignupDto = {
        username: 'a',
        email: 'a@a.com',
        password: '123',
      };
      expect(await service.signup(dto)).toMatchObject({
        id: expect.any(Number),
        username: dto.username,
        createdAt: expect.any(Date),
      });
    });

    it('should throw exception when user already exists.', async () => {
      const dto: SignupDto = {
        username: 'a',
        email: 'a@a.com',
        password: '123',
      };
      await service
        .signup(dto)
        .then((user) => expect(user).toBeUndefined())
        .catch((e) => expect(e.message).toBe('User already exists.'));
    });
  });

  describe('login service test', () => {
    it('should throw an exception when user does not exist', async () => {
      const dto: LoginDto = {
        email: 'a@B.com',
        password: '123',
      };
      await service
        .login(dto)
        .then((user) => expect(user).toBeUndefined())
        .catch((e) => expect(e.message).toBe('User does not exist.'));
    });

    it("should throw an exception when user's password is incorrect", async () => {
      const dto: LoginDto = {
        email: 'a@a.com',
        password: '122',
      };
      await service
        .login(dto)
        .then((user) => expect(user).toBeUndefined())
        .catch((e) => expect(e.message).toBe('Incorrect Password.'));
    });

    it('should login', async () => {
      const dto: LoginDto = {
        email: 'a@a.com',
        password: '123',
      };
      await service.login(dto).then((user) => {
        expect(user).toBeDefined();
        expect(user).toMatchObject({
          id: expect.any(Number),
          username: user.username,
          createdAt: expect.any(Date),
        });
      });
    });
  });
});
