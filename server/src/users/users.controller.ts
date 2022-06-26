import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { CurrentUser } from './decorator/users.decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtGuard)
  @Get('me')
  async me(@CurrentUser() user: User) {
    return user;
  }
}
