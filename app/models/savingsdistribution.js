import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Savingsdistribution extends Model {}

Savingsdistribution.init({
  savingstype: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  holder: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  estimatedvalue: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  financialinstitute: {
    type: DataTypes.TEXT,
    allowNull: false
  }
 
}, {
  sequelize, /* DB connection instance */
  tableName: "savingsdistribution"
});

/*
// To test it simply!
Savingsdistribution.findAll().then(res => console.log(res));
*/