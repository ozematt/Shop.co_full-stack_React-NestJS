import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { User } from '@prisma/client';
import {
  EditUserAddressDto,
  EditUserDetailsDto,
  SetUserAddressDto,
  SetUserDetails,
} from './dto';
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

      const existingUser = await this.prisma.userDetails.findUnique({
        where: { username: dto.username },
      });

      if (existingUser) {
        throw new HttpException(
          { message: 'Username already exists', field: 'username' },
          HttpStatus.BAD_REQUEST,
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

      if (error instanceof HttpException) {
        throw error; // Passes the original error to the frontend
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
      const details = await this.prisma.userDetails.findFirst({
        where: {
          user_id: user.id,
        },
      });

      if (!details || details.user_id !== user.id) {
        throw new ForbiddenException('Access to resource denied');
      }
      const existingUser = await this.prisma.userDetails.findUnique({
        where: { username: dto.username },
      });

      if (existingUser) {
        throw new HttpException(
          { message: 'Username already exists', field: 'username' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const detailsUpdate = await this.prisma.userDetails.update({
        where: {
          user_id: user.id,
        },
        data: {
          ...dto,
        },
      });
      return detailsUpdate;
    } catch (error) {
      console.error('Error editing user details:', error);

      if (error instanceof HttpException) {
        throw error; // Passes the original error to the frontend
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async setUserAddress(user: User, dto: SetUserAddressDto) {
    try {
      const address = await this.prisma.userAddress.create({
        data: {
          user_id: user.id,
          ...dto,
        },
      });
      return address;
    } catch (error) {
      console.error('Error adding user address:', error);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async getUserAddress(user: User) {
    try {
      const addresses = await this.prisma.userAddress.findMany({
        where: {
          user_id: user.id,
        },
      });

      if (addresses.length === 0) {
        throw new HttpException(
          'No addresses found for this user',
          HttpStatus.NOT_FOUND,
        );
      }

      return addresses;
    } catch (error) {
      console.error('Error getting user address:', error);

      if (error instanceof HttpException) {
        throw error; // Passes the original error to the frontend
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async editUserAddress(user: User, dto: EditUserAddressDto) {
    try {
      const address = await this.prisma.userAddress.findUnique({
        where: {
          id: dto.addressId,
          user_id: user.id,
        },
      });

      if (!address) {
        throw new HttpException(
          'No addresses found for this user',
          HttpStatus.NOT_FOUND,
        );
      }
      const updatedAddress = await this.prisma.userAddress.update({
        where: { id: dto.addressId },
        data: {
          fullName: dto.fullName,
          street: dto.street,
          houseNumber: dto.houseNumber,
          city: dto.city,
          zipCode: dto.zipCode,
          country: dto.country,
        },
      });
      return updatedAddress;
    } catch (error) {
      console.error('Error editing user address:', error);

      if (error instanceof HttpException) {
        throw error; // Passes the original error to the frontend
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
