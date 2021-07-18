import { Controller, Delete, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
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
  async logout(@Req() req: Request, @Res() res: Response) {
    req.logOut();
    req.session.cookie.maxAge = 0;
    res.send({});
  }
}
