import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDetailsDto, SetUserAddressDto, SetUserDetails } from './dto';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(@GetUser() user: User) {
    return this.userService.getUser(user);
  }

  // DETAILS <-------
  @Post('details')
  async setUserDetails(@GetUser() user: User, @Body() dto: SetUserDetails) {
    return this.userService.setUserDetails(user, dto);
  }

  @Get('details')
  async getUserDetails(@GetUser() user: User) {
    return this.userService.getUserDetails(user);
  }

  @Patch('details')
  async editUserDetails(
    @GetUser() user: User,
    @Body() dto: EditUserDetailsDto,
  ) {
    return this.userService.editUserDetails(user, dto);
  }

  // ADDRESS <--------
  @Post('address')
  async setUserAddress(@GetUser() user: User, @Body() dto: SetUserAddressDto) {
    return this.userService.setUserAddress(user, dto);
  }

  @Get('address')
  async getUserAddress(@GetUser() user: User) {
    return this.userService.getUserAddress(user);
  }
}
