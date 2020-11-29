import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateCardDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsNumber()
  listId: number
}
