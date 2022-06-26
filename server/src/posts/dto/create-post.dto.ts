import { IsNumber, Length } from 'class-validator';

export class CreatePostDto {
  @Length(1, 64)
  title: string;

  body?: string;

  @IsNumber()
  creatorId: number;
}
