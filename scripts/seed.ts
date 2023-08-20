const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.certificate.createMany({
      data: [{ name: 'Test' }],
    });
  } catch (error) {
    console.error('Error seeding default categories', error);
  } finally {
    await db.$disconnect();
  }
}

main();
