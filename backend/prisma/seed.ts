import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('password');
  const userA = await prisma.user.create({
    data: {
      avatarUrl: '1',
      name: 'Dever',
      password: password,
      username: 'dever9',
    },
  });

  const userB = await prisma.user.create({
    data: {
      avatarUrl: '2',
      name: 'Regis Tor',
      password: password,
      username: 'regist',
    },
  });

  await prisma.gist.create({
    data: {
      description: 'This is a test description',
      authorId: userA.id,
      files: {
        createMany: {
          data: [
            {
              filename: 'index.ts',
              language: 'typescript',
              snippet: `interface IndexProps {
                gists: Gist[];
              }`,
            },
            {
              filename: 'index.js',
              language: 'javascript',
              snippet: `console.log('hello world')`,
            },
          ],
        },
      },
      isPrivate: false,
      comments: {
        createMany: {
          data: [
            {
              userId: userB.id,
              comment: 'This is awesome',
            },
          ],
        },
      },
    },
  });

  await prisma.gist.create({
    data: {
      description: 'This is a second test description',
      authorId: userA.id,
      files: {
        createMany: {
          data: [
            {
              filename: 'index.py',
              language: 'python',
              snippet: `print('Hello World!)`,
            },
          ],
        },
      },
      isPrivate: false,
      comments: {
        createMany: {
          data: [
            {
              userId: userB.id,
              comment: 'This is awesome',
            },
            {
              userId: userB.id,
              comment: 'LGTM!',
            },
          ],
        },
      },
    },
  });

  await prisma.gist.create({
    data: {
      description: 'This is a third test description',
      authorId: userB.id,
      files: {
        createMany: {
          data: [
            {
              filename: 'index',
              language: 'text',
              snippet: `This is a plain text as an example
              input for this app`,
            },
          ],
        },
      },
      isPrivate: false,
      comments: {
        createMany: {
          data: [
            {
              userId: userA.id,
              comment: 'This is awesome',
            },
          ],
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
