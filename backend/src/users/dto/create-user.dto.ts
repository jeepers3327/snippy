import { IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsUrl()
  public avatarUrl: string;

  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
