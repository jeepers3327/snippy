import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

@Module({
  imports: [PrismaModule],
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
