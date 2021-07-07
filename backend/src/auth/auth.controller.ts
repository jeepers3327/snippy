import { Controller, Delete, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('logout')
  async logout(@Req() req: Request) {
    req.logOut();
    req.session.cookie.maxAge = 0;
  }
}
