import { Controller, Get, Query } from '@nestjs/common';
import { GistSearch } from '@prisma/client';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async findAll(@Query('q') query: string): Promise<GistSearch[]> {
    return await this.searchService.findAll(query);
  }
}
