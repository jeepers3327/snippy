import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GistsService } from './gists.service';
import { CreateGistDto } from './dto/create-gist.dto';
import { UpdateGistDto } from './dto/update-gist.dto';
import { Response } from 'express';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';

@Controller('gists')
export class GistsController {
  constructor(private readonly gistsService: GistsService) {}

  @Post()
  @UseGuards(AuthenticatedGuard)
  create(@Body() createGistDto: CreateGistDto): Promise<GistWithAuthor> {
    return this.gistsService.create(createGistDto);
  }

  @Get()
  async findAll(): Promise<GistWithEntityCounts[]> {
    return this.gistsService.findAll();
  }

  @Get('user/:username')
  async findAllUserGists(
    @Param('username') username: string,
  ): Promise<GistWithEntityCounts[]> {
    return this.gistsService.findAllUserGist(username);
  }

  @Get(':gistId')
  findOne(@Param('gistId') gistId: string): Promise<GistDetails> {
    return this.gistsService.findOne(gistId);
  }

  @Patch(':gistId')
  @UseGuards(AuthenticatedGuard)
  async update(
    @Param('gistId') gistId: string,
    @Body() updateGistDto: UpdateGistDto,
  ): Promise<GistWithAuthor> {
    return await this.gistsService.update(gistId, updateGistDto);
  }

  @Delete(':username/:gistId')
  @UseGuards(AuthenticatedGuard)
  async remove(
    @Param('username') username: string,
    @Param('gistId') gistId: string,
    @Res() res: Response,
  ): Promise<Response<Record<any, Record<string, any>>>> {
    const deletedGist = await this.gistsService.remove(username, gistId);

    return res
      .status(200)
      .send({ message: `Gist with id ${deletedGist.id} has been deleted` });
  }

  @Patch(':gistId/public')
  @UseGuards(AuthenticatedGuard)
  async setPublicGist(@Param('gistId') gistId: string) {
    return await this.gistsService.setPublicGist(gistId);
  }
}
