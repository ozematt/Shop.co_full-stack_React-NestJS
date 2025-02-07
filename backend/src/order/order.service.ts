import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { User } from '@prisma/client';
import { SetOrderDto } from './dto';
import { create } from 'domain';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOrder(user: User) {
    const orders =await this.prisma.order.findMany({
      where: {
        user_id: user.id,
      },
    });

    if (!orders)
      throw new HttpException('User has 0 orders', HttpStatus.NOT_FOUND);

   const ordersId = 
 
    return orders;
  }

  async setOrder(user: User, dto: SetOrderDto) {
    try {
      const itemsArr = dto.orderItems.map((item) => ({
        productName: item.productName,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      }));

      const order = await this.prisma.order.create({
        data: {
          total: dto.total,
          user_id: user.id,
          orderItems: { create: itemsArr },
        },
        include: {
          orderItems: true,
        },
      });
      return order;
    } catch (error) {
      console.error('Error creating order:', error);
      throw new HttpException('Cos nie tak', HttpStatus.BAD_REQUEST);
    }
  }
}
