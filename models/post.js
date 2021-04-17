// structure of plant post table in database
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Post extends Model {}
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // ???
    image_name: {
      type: DataTypes.BLOB,
    },
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { args: true, msg: "You must enter a plant name" },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sun_requirement: {
      type: DataTypes.STRING,
    },
    pet_safe: {
      type: DataTypes.STRING,
    },
    edible: {
      type: DataTypes.STRING,
    },
    easy_care: {
      type: DataTypes.STRING,
    },
    water_needed: {
      type: DataTypes.STRING,
    },
    growth_rate: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    user_email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
module.exports = Post;
