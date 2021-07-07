import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany({});
    return users;
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await argon2.hash(createUserDto.password);
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        username: createUserDto.username,
        avatarUrl: '',
        password: hashedPassword,
      },
    });

    return user;
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return user;
  }

  async findOneByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    return user;
  }
}
