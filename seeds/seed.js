const sequelize = require("../config/connection");
// will need to update with our models
const { User, Post } = require("../models");

// will also need to update to our models
const userData = require("./userSeedData.json");
const postData = require("./postSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
