import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  async getUser(user: User) {
    return user.email;
  }
}
