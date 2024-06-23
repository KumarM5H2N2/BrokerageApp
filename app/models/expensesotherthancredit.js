import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Expensesotherthancredit extends Model {}

Expensesotherthancredit.init({
    nature: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  annualsum: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
   
}, {
  sequelize, /* DB connection instance */
  tableName: "expensesotherthancredit"
});

// To test it simply!
Expensesotherthancredit.findAll().then(res => console.log(res));