const sequelize = require('../config/connection');
const seedMenu = require('./menuData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedAll();