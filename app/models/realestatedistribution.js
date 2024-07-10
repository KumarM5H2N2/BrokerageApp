import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Realestatedistribution extends Model {}

Realestatedistribution.init({
    realestatetype: {
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
  dateaquisition: {
    type: DataTypes.DATE,
    allowNull: false
  }
 
}, {
  sequelize, /* DB connection instance */
  tableName: "realestatedistribution"
});

/*
// To test it simply!
Realestatedistribution.findAll().then(res => console.log(res));
*/