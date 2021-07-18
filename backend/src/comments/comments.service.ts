import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCommentDto: CreateCommentDto) {
    const comment = await this.prisma.comment.create({
      data: {
        comment: createCommentDto.comment,
        gistId: createCommentDto.gistId,
        userId: createCommentDto.userId,
      },
      include: {
        user: {
          select: {
            id: true,
            avatarUrl: true,
            username: true,
            createdAt: true,
          },
        },
      },
    });
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.prisma.comment.update({
      data: {
        comment: updateCommentDto.comment,
      },
      where: {
        id: id,
      },
      include: {
        user: {
          select: {
            id: true,
            avatarUrl: true,
            username: true,
            createdAt: true,
          },
        },
      },
    });
    return comment;
  }

  async remove(id: string) {
    const comment = await this.prisma.comment.delete({ where: { id: id } });
    return comment;
  }
}
