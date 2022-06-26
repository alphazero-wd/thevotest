import * as argon from 'argon2';
import { Test, TestingModule } from '@nestjs/testing';
import { Post, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let prisma: PrismaService;
  let user: User;
  let post: Post;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, PrismaService],
    }).compile();

    service = module.get<PostsService>(PostsService);
    prisma = module.get<PrismaService>(PrismaService);

    await prisma.reset();
    user = await prisma.user.create({
      data: {
        username: 'a',
        email: 'a@a.com',
        password: await argon.hash('123'),
      },
    });
  });

  describe('create a post', () => {
    it('should create a post', async () => {
      const dto: CreatePostDto = {
        title: 'Post 1',
        body: 'This is post one',
        creatorId: user.id,
      };
      post = await service.create(dto);
      expect(post).toBeDefined();
    });
  });

  describe('get posts test', () => {
    it('should get all the posts', async () => {
      const posts = await service.findAll();
      expect(posts.length).toBe(1);
    });
  });

  describe('get a post', () => {
    it('should return a post', async () => {
      const searchPost = await service.findOne(post.id);
      expect(searchPost).toBeDefined();
    });
  });

  describe('update a post', () => {
    it('should update a post', async () => {
      const dto: UpdatePostDto = {
        body: 'This is a post.',
        creatorId: user.id,
      };
      expect(await service.update(post.id, dto)).toBeDefined();
    });
  });

  describe('remove a post', () => {
    it('should remove a post', async () => {
      await service.remove(post.id);
      const posts = await service.findAll();
      expect(posts.length).toBe(0);
    });
  });
});
