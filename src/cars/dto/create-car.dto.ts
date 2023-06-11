import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({
    message: 'brand muust be a string',
  })
  readonly brand: string;
  @IsString()
  readonly model: string;
}
