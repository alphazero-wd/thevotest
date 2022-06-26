import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let prisma: PrismaService;
  let user: User;
  let controller: UsersController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [PrismaService, ConfigService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    controller = module.get<UsersController>(UsersController);

    await prisma.reset();

    user = await prisma.user.create({
      data: {
        username: 'a',
        email: 'a@a.com',
        password: '123',
      },
    });
  });

  describe('test me', () => {
    it('should return the current user', async () => {
      expect(await controller.me(user)).toBeDefined();
      expect(await controller.me(user)).toMatchObject(user);
    });
  });
});
