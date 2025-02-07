import { Get, Injectable, Req, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtGuard } from '../auth/guard';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtGuard)
  @Get()
  getOrder(@Req() req: Request) {
    return req;
  }
}
