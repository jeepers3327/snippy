import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const dummyPass = await argon2.hash(`password`);
  const dummy = await prisma.user.create({
    data: {
      name: 'Dummy',
      username: 'dummy',
      password: dummyPass,
      avatarUrl: '',
    },
  });

  console.log({ dummy });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
