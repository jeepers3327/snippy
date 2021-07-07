import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UsersService) {
    super();
  }

  serializeUser(user: User, done: (err: Error, user: any) => void): any {
    done(null, user.id);
  }
  async deserializeUser(
    userId: string,
    done: (err: Error, payload: Omit<User, 'password'>) => void,
  ): Promise<any> {
    const user = await this.userService.findOne(userId);
    const { password, ...userInfo } = user;
    done(null, userInfo);
  }
}
