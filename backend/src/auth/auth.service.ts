import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as argon2 from 'argon2';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findOneByUsername(username);
    console.log(user);

    if (!user) {
      throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    }

    const isValid = await argon2.verify(user.password, password);
    console.log(isValid);

    if (isValid) {
      const { password, ...userInfo } = user;
      return userInfo;
    }

    return null;
  }
}
