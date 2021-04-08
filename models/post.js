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
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 30,
      },
    },
    sun_requirement: {
      type: DataTypes.STRING,
    },
    pet_safe: {
      type: DataTypes.BOOLEAN,
    },
    edible: {
      type: DataTypes.BOOLEAN,
    },
    easy_care: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
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