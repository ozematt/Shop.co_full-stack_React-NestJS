import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderService } from './order.service';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { SetOrderDto } from './dto';

@UseGuards(JwtGuard)
@Controller('orders')
export class OrderController {
  constructor(
    private orderService: OrderService,
    private prisma: PrismaService,
  ) {}

  @Get('one')
  getOrder(@GetUser() user: User) {
    return this.orderService.getOrder(user);
  }

  @Post('two')
  setOrder(@GetUser() user: User, @Body() dto: SetOrderDto) {
    return this.orderService.setOrder(user, dto);
  }
}
