import { Module } from '@nestjs/common';
import { StargazersService } from './stargazers.service';
import { StargazersController } from './stargazers.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [StargazersService],
  controllers: [StargazersController]
})
export class StargazersModule {}
