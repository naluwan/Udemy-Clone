const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: '網頁開發' },
        { name: '音樂' },
        { name: '健身' },
        { name: '修圖' },
        { name: '理財' },
        { name: '工程開發' },
        { name: '資料庫' },
      ],
    });

    console.log('類別種子建立完成');
  } catch (err) {
    console.log('類別資料庫種子發生錯誤 ', err);
  } finally {
    await database.$disconnect();
  }
}

main();
