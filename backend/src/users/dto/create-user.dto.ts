import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsString()
  public avatarUrl: string;

  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
