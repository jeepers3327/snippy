import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGistDto } from './dto/create-gist.dto';
import { UpdateGistDto } from './dto/update-gist.dto';
import { AuthorCustomSelect, UserCommentCustomSelect } from './gist.selectors';

@Injectable()
export class GistsService {
  constructor(private prisma: PrismaService) {}

  async create(createGistDto: CreateGistDto): Promise<GistBaseResponse> {
    const gist = await this.prisma.gist.create({
      data: {
        description: createGistDto.description,
        authorId: createGistDto.authorId,
        isPrivate: createGistDto.isPrivate,
        files: {
          createMany: {
            data: createGistDto.files,
          },
        },
      },
      include: {
        author: AuthorCustomSelect,
        files: true,
      },
    });

    return gist;
  }

  async findAll(): Promise<GistWithEntityCounts[]> {
    const gists = await this.prisma.gist.findMany({
      where: {
        isPrivate: false,
      },
      include: {
        author: AuthorCustomSelect,
        files: true,
        _count: {
          select: {
            stargazers: true,
            files: true,
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return gists;
  }

  async findAllUserGist(username: string): Promise<GistWithEntityCounts[]> {
    const user = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new HttpException('User not found!', 404);
    }

    const gists = await this.prisma.gist.findMany({
      where: {
        author: {
          username: username,
        },
      },
      include: {
        author: AuthorCustomSelect,
        files: true,
        _count: {
          select: {
            stargazers: true,
            files: true,
            comments: true,
          },
        },
      },
    });

    return gists;
  }

  async findOne(gistId: string): Promise<GistDetails> {
    const gist = await this.prisma.gist.findUnique({
      where: { id: gistId },
      include: {
        author: AuthorCustomSelect,
        comments: {
          include: {
            user: UserCommentCustomSelect,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
        files: true,
        stargazers: true,
      },
    });

    if (!gist) {
      throw new HttpException('Gist not found!', 404);
    }

    return gist;
  }

  async update(
    gistId: string,
    updateGistDto: UpdateGistDto,
  ): Promise<GistWithAuthor> {
    const gist = await this.prisma.gist.findUnique({
      where: { id: gistId },
      include: {
        author: AuthorCustomSelect,
      },
    });

    if (!gist) {
      throw new HttpException('Gist not found!', 404);
    }

    if (gist.author.id !== updateGistDto.authorId) {
      throw new HttpException(
        "You're not authorized to perform this action!",
        403,
      );
    }

    await this.prisma.gistFile.deleteMany({
      where: {
        id: {
          in: updateGistDto.deletedGistFiles,
        },
      },
    });

    await this.prisma.gist.update({
      where: {
        id: gistId,
      },
      data: {
        description: updateGistDto.description,
        isPrivate: updateGistDto.isPrivate,
      },
    });

    updateGistDto.updatedGistFiles.map(async (gistFile) => {
      await this.prisma.gistFile.upsert({
        create: {
          gistId: gistFile.gistId,
          filename: gistFile.filename,
          language: gistFile.language,
          snippet: gistFile.snippet,
        },
        update: {
          filename: gistFile.filename,
          language: gistFile.language,
          snippet: gistFile.snippet,
        },
        where: {
          id: gistFile.id,
        },
      });
    });

    return gist;
  }

  async remove(username: string, gistId: string): Promise<GistWithAuthor> {
    const gist = await this.prisma.gist.findUnique({
      where: { id: gistId },
      include: {
        author: AuthorCustomSelect,
      },
    });

    if (!gist) {
      throw new HttpException('Gist not found!', 404);
    }

    if (gist.author.username !== username) {
      throw new HttpException(
        "You're not authorized to perform this action!",
        403,
      );
    }

    await this.prisma.gist.delete({ where: { id: gistId } });
    return gist;
  }

  async setPublicGist(gistId: string): Promise<BaseGist> {
    const gist = this.prisma.gist.findUnique({ where: { id: gistId } });

    if (!gist) {
      throw new HttpException('Gist not found!', 404);
    }

    await this.prisma.gist.update({
      data: {
        isPrivate: false,
      },
      where: {
        id: gistId,
      },
    });

    return gist;
  }
}
