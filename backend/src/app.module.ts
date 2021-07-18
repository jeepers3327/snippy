import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GistsModule } from './gists/gists.module';
import { SearchModule } from './search/search.module';
import { FilesModule } from './files/files.module';
import { StargazersModule } from './stargazers/stargazers.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    GistsModule,
    SearchModule,
    FilesModule,
    StargazersModule,
    CommentsModule,
  ],
})
export class AppModule {}
