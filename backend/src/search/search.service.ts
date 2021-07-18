import { Injectable } from '@nestjs/common';
import { GistSearch } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: string): Promise<GistSearch[]> {
    const gists = await this.prisma.$queryRaw(
      `SELECT * FROM gist_search WHERE to_tsvector(description || ' ' || files) @@ to_tsquery('${query}')`,
    );
    return gists;
  }
}
