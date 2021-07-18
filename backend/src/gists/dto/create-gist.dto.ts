import {
  IsString,
  IsBoolean,
  IsUUID,
  IsArray,
  ArrayMinSize,
} from 'class-validator';
import { Gist, GistFile } from '@prisma/client';

export class CreateGistDto
  implements Omit<Gist, 'id' | 'createdAt' | 'updatedAt'>
{
  @IsString()
  public description: string;

  @IsBoolean()
  public isPrivate: boolean;

  @IsUUID()
  public authorId: string;

  @IsArray()
  @ArrayMinSize(1)
  public files: Omit<GistFile, 'id'>[];
}
