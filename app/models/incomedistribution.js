import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Incomedistribution extends Model {}

Incomedistribution.init({
    incometype: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  holder: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  annualsum: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
 
}, {
  sequelize, /* DB connection instance */
  tableName: "incomedistribution"
});

// To test it simply!
Incomedistribution.findAll().then(res => console.log(res));