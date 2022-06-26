import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { Post, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let prisma: PrismaService;
  let user: User;
  let anotherUser: User;
  let post: Post;
  let controller: PostsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService, PrismaService, ConfigService],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    controller = module.get<PostsController>(PostsController);

    await prisma.reset();
    user = await prisma.user.create({
      data: {
        username: 'a',
        email: 'a@a.com',
        password: '123',
      },
    });
    anotherUser = await prisma.user.create({
      data: {
        username: 'b',
        email: 'b@b.com',
        password: '123',
      },
    });
  });

  describe('createPost test', () => {
    it('should create a post', async () => {
      const dto: CreatePostDto = {
        title: 'Post 1',
        body: 'This is post one.',
        creatorId: user.id,
      };

      const res = await controller.create(user, dto);
      post = res.post;
      expect(post).toBeDefined();
      expect(post.title).toBe(dto.title);
      expect(post.body).toBe(dto.body);
      expect(post.creatorId).toBe(user.id);
    });
  });

  describe('findAll test', () => {
    it('should find all posts', async () => {
      const { posts } = await controller.findAll();
      expect(posts.length).toBe(1);
      expect(posts).toEqual([post]);
    });
  });

  describe('findOne test', () => {
    it('should return a post', async () => {
      const { post: singlePost } = await controller.findOne(post.id);
      expect(singlePost).toBeDefined();
      expect(singlePost.title).toBe(post.title);
      expect(singlePost.body).toBe(post.body);
    });
  });

  describe('updatePost test', () => {
    it("should throw an exception when a user updates another user's post", async () => {
      const dto: UpdatePostDto = {
        title: 'Post 2',
        body: 'This is another post.',
      };

      await controller
        .update(anotherUser, post.id, dto)
        .then(({ post }) => expect(post).toBeUndefined())
        .catch((e) =>
          expect(e.message).toBe('You are not allowed to edit the post.'),
        );
    });

    it('should update a post', async () => {
      const dto: UpdatePostDto = {
        title: 'Post 2',
        body: 'This is another post.',
      };

      const { post: updatedPost } = await controller.update(user, post.id, dto);
      expect(updatedPost.title).toBe(dto.title);
      expect(updatedPost.body).toBe(dto.body);
    });
  });

  describe('removePost test', () => {
    it("should throw an exception when a user removes another user's post", async () => {
      await controller
        .remove(anotherUser, post.id)
        .then(({ post }) => expect(post).toBeUndefined())
        .catch((e) =>
          expect(e.message).toBe('You are not allowed to remove the post.'),
        );
    });

    it('should remove a post', async () => {
      await controller.remove(user, post.id);
      const { posts } = await controller.findAll();
      const { post: singlePost } = await controller.findOne(post.id);
      expect(posts.length).toBe(0);
      expect(singlePost).toBeNull();
    });
  });
});
