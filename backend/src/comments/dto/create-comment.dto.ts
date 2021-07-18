import { IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  public comment: string;

  @IsString()
  public gistId: string;

  @IsString()
  public userId: string;
}
