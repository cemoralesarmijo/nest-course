import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString({
    message: 'brand muust be a string',
  })
  @IsString()
  @IsOptional()
  readonly brand: string;
  @IsString()
  @IsOptional()
  readonly model: string;
}
