const sequelize = require('../config/connection');
const { User, Clothes } = require('../models');

const userData = require('./userData.json');
const clothingData = require('./clothingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
