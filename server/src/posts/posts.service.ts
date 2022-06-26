import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { userSelect } from './interfaces/user-select.interface';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto,
      include: { creator: { select: { ...userSelect } } },
    });
  }

  findAll() {
    return this.prisma.post.findMany({
      include: { creator: { select: { ...userSelect } } },
    });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { creator: { select: { ...userSelect } } },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
      include: { creator: { select: { ...userSelect } } },
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
      include: { creator: { select: { ...userSelect } } },
    });
  }
}
