import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ForbiddenException,
  ParseIntPipe,
  Header,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CurrentUser } from '../users/decorator/users.decorator';
import { User } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly posts: PostsService) {}

  @UseGuards(JwtGuard)
  @Post('create')
  async create(
    @CurrentUser() user: User,
    @Body() createPostDto: Omit<CreatePostDto, 'creatorId'>,
  ) {
    const post = await this.posts.create({
      ...createPostDto,
      creatorId: user.id,
    });
    return { post };
  }

  @Get()
  async findAll() {
    const posts = await this.posts.findAll();
    return { posts };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const post = await this.posts.findOne(id);
    return { post };
  }

  @UseGuards(JwtGuard)
  @Patch('update/:id')
  async update(
    @CurrentUser() user: User,
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    const post = await this.posts.findOne(id);
    if (post.creatorId === user.id) {
      const updatedPost = await this.posts.update(id, {
        ...updatePostDto,
        creatorId: user.id,
      });
      return { post: updatedPost };
    }
    throw new ForbiddenException('You are not allowed to edit the post.');
  }

  @UseGuards(JwtGuard)
  @Delete('/delete/:id')
  async remove(
    @CurrentUser() user: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const post = await this.posts.findOne(id);
    if (post.creatorId === user.id) {
      const removedPost = await this.posts.remove(id);
      return { post: removedPost };
    }
    throw new ForbiddenException('You are not allowed to remove the post.');
  }
}
