import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Clientfile extends Model {}

Clientfile.init({
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  firstname1: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize, /* DB connection instance */
  tableName: "clientfile"
});

// To test it simply!
Clientfile.findAll().then(res => console.log(res));