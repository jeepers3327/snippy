import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StargazersService {
  constructor(private readonly prisma: PrismaService) {}

  async starGist(gistId: string, userId: string) {
    const gist = await this.prisma.gist.update({
      data: {
        stargazers: {
          create: {
            userId: userId,
          },
        },
      },
      where: {
        id: gistId,
      },
      select: {
        _count: {
          select: {
            stargazers: true,
          },
        },
      },
    });

    return gist;
  }

  async unstarGist(gistId: string, userId: string) {
    const gist = await this.prisma.gist.update({
      data: {
        stargazers: {
          delete: {
            userId_gistId: { gistId, userId },
          },
        },
      },
      where: {
        id: gistId,
      },
      select: {
        _count: {
          select: {
            stargazers: true,
          },
        },
      },
    });

    return gist;
  }
}
