import { Gender } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditUserDetailsDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Age must be a number' })
  @IsOptional()
  age?: number;

  @IsEnum(Gender, { message: 'Gender must be M or F' })
  @IsOptional()
  gender?: Gender;
}
