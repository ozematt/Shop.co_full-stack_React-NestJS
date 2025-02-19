import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export enum Gender {
  M = 'M',
  F = 'F',
}

export class SetUserDetails {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsEnum(Gender, { message: 'Gender must be M or F' })
  @IsOptional()
  gender?: Gender;
}
