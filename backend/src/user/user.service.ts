import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  async getUser(user: User) {
    return user.email;
  }
  async setUserDetails(user: User) {}
  async getUserDetails(user: User) {}
  async setUserAddress(user: User) {}
  async getUserAddress(ser: User) {}
}
