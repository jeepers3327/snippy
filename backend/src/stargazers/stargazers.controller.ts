import { Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { StargazersService } from './stargazers.service';
import { Request } from 'express';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

@Controller('gists')
export class StargazersController {
  constructor(private readonly stargazersService: StargazersService) {}

  @UseGuards(AuthenticatedGuard)
  @Post(':gistId/star')
  async starGist(@Req() req: Request, @Param('gistId') gistId: string) {
    return await this.stargazersService.starGist(gistId, req.user.id);
  }

  @UseGuards(AuthenticatedGuard)
  @Post(':gistId/unstar')
  async unstarGist(@Req() req: Request, @Param('gistId') gistId: string) {
    return await this.stargazersService.unstarGist(gistId, req.user.id);
  }
}
