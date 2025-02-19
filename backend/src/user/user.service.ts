import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { SetUserDetails } from './dto';

@Injectable()
export class UserService {
  async getUser(user: User) {
    return user.email;
  }
  async setUserDetails(user: User, dto: SetUserDetails) {
    try {
    } catch (error) {
      console.error('Error adding user details:', error);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }
  async getUserDetails(user: User) {}
  async setUserAddress(user: User) {}
  async getUserAddress(ser: User) {}
}
