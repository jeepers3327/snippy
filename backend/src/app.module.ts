import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, DummyModule],
})
export class AppModule {}
