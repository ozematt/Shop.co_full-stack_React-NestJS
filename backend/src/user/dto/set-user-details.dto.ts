import { Gender } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SetUserDetails {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Age must be a number' })
  age: number;

  @IsEnum(Gender, { message: 'Gender must be M or F' })
  gender: Gender;
}
