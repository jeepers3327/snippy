import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Response } from 'express';
import * as fs from 'fs';
import * as archiver from 'archiver';
import * as tempty from 'tempy';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}
  async downloadFiles(gistId: string, res: Response) {
    const gist = await this.prisma.gist.findUnique({
      where: {
        id: gistId,
      },
      include: {
        files: true,
      },
    });

    if (!gist) {
      throw new HttpException('Gist not found!', 404);
    }
    const tmpFile = fs.createWriteStream(tempty.file());

    const archive = archiver('zip');
    const files = gist.files;

    archive.pipe(tmpFile);

    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      archive.append(file.snippet, { name: file.filename });
    }

    res.attachment(`${gistId}.zip`);
    archive.pipe(res);

    await archive.finalize();

    res.on('close', () => {
      tmpFile.end();
      return res.status(200).end();
    });
  }
}
