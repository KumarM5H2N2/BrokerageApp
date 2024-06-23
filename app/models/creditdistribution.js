import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Creditdistribution extends Model {}

Creditdistribution.init({
    credittype: {
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
  },
  remainingcapitaldue: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  creditorbank: {
    type: DataTypes.TEXT,
    allowNull: false
  }
 
}, {
  sequelize, /* DB connection instance */
  tableName: "creditdistribution"
});

// To test it simply!
Creditdistribution.findAll().then(res => console.log(res));