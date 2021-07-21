import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as redis from 'redis';
import * as connectRedis from 'connect-redis';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.APP_PORT || 4000;

  const client = redis.createClient({ url: process.env.REDIS_URI });
  const RedisStore = connectRedis(session);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ credentials: true, origin: ['http://localhost:3000', 'https://snippy.blanknodes.com']});
  app.use(helmet());

  app.use(
    session({
      store: new RedisStore({ client }),
      secret: process.env.APP_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 3600000 * 24 * 14,
        secure: process.env.NODE_ENV === 'production',
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
