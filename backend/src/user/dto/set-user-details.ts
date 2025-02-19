import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export enum Gender {
  M = 'M',
  F = 'F',
}

export class SetUserDetails {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  firstName?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  lastName?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  username?: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Age must be a number' })
  @IsOptional()
  age?: number;

  @IsEnum(Gender, { message: 'Gender must be M or F' })
  @IsOptional()
  gender?: Gender;
}
