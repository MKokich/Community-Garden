const Post = require('./post');
const User = require('./user');

// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
//   onDelete: 'CASCADE',
// });

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post };
