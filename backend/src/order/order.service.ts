import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { User } from '@prisma/client';
import { SetOrderDto } from './dto';
import { create } from 'domain';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOrder(user: User) {
    const orders = await this.prisma.order.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        orderItems: true,
      },
    });

    if (!orders)
      throw new HttpException('User has 0 orders', HttpStatus.NOT_FOUND);

    return orders;
  }
}
