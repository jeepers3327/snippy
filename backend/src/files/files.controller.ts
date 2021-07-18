import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get(':gistId/download')
  async download(@Param('gistId') gistId: string, @Res() res: Response) {
    await this.filesService.downloadFiles(gistId, res);
  }
}
