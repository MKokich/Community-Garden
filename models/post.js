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
    sunlight_needed: {
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

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },

    user_email: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "email",
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
