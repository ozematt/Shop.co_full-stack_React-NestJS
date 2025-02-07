import { Controller } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('orders')
export class OrderController {
  constructor(private prisma: PrismaService) {}
}
