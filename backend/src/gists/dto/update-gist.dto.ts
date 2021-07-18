import { GistFile } from '@prisma/client';
import { IsArray, IsBoolean, IsString, IsUUID } from 'class-validator';

export class UpdateGistDto {
  @IsUUID()
  public authorId: string;

  @IsString()
  public description: string;

  @IsBoolean()
  public isPrivate: boolean;

  @IsArray()
  public deletedGistFiles: string[];

  @IsArray()
  public updatedGistFiles: Partial<GistFile[]>;
}
