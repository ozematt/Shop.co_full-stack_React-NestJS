import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(@GetUser() user: User) {
    return this.userService.getUser(user);
  }

  @Post('details')
  async setUserDetails(@GetUser() user: User) {
    return this.userService.setUserDetails(user);
  }

  @Get('details')
  async getUserDetails(@GetUser() user: User) {
    return this.userService.getUserDetails(user);
  }

  @Post('address')
  async setUserAddress(@GetUser() user: User) {
    return this.userService.setUserAddress(user);
  }

  @Get('address')
  async getUserAddress(@GetUser() user: User) {
    return this.userService.getUserAddress(user);
  }
}
