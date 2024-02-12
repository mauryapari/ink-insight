const { PrismaClient } = require("@prisma/client");
const { categories } = require("./seed-data/categories");
// import { categories } from "./seed-data/categories";

const prisma = new PrismaClient();


async function main() {
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
}

main()
  .catch((err) => {
    console.log("Error while Seeding Data", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
