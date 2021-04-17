// structure of plant post table in database
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Pics extends Model {}
Pics.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // ???
    image: {
      type: DataTypes.BLOB,
    },
    image_name: {
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pics",
  }
);
module.exports = Pics;