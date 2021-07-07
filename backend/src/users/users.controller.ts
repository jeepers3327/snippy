import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthenticatedGuard)
  async findAll() {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body('user') user: CreateUserDto) {
    const result = await this.userService.create(user);

    return result;
  }
}
