import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { EditUserDetailsDto, SetUserDetails } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(user: User) {
    return user.email;
  }

  async setUserDetails(user: User, dto: SetUserDetails) {
    try {
      const existingDetails = await this.prisma.userDetails.findUnique({
        where: { user_id: user.id },
      });

      if (existingDetails) {
        throw new HttpException(
          'User details already exist',
          HttpStatus.CONFLICT,
        );
      }

      const details = await this.prisma.userDetails.create({
        data: {
          user_id: user.id,
          firstName: dto.firstName,
          lastName: dto.lastName,
          username: dto.username,
          age: dto.age,
          gender: dto.gender,
        },
      });
      return details;
    } catch (error) {
      console.error('Error adding user details:', error);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async getUserDetails(user: User) {
    try {
      const details = await this.prisma.userDetails.findUnique({
        where: {
          user_id: user.id,
        },
      });
      return details;
    } catch (error) {
      console.error('Error getting user details:', error);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async editUserDetails(user: User, dto: EditUserDetailsDto) {
    try {
    } catch (error) {
      console.error('Error editing user details:', error);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async setUserAddress(user: User) {}
  async getUserAddress(ser: User) {}
}
