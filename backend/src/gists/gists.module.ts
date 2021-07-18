import { Module } from '@nestjs/common';
import { GistsService } from './gists.service';
import { GistsController } from './gists.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [PrismaModule],
  controllers: [GistsController],
  providers: [GistsService],
})
export class GistsModule {}
