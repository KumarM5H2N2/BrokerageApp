import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Useraccess extends Model {}

Useraccess.init({
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  prenom: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  nom: {
    type: DataTypes.TEXT,
    allowNull: false
  }
 
}, {
  sequelize, /* DB connection instance */
  tableName: "useraccess"
});

// To test it simply!
Useraccess.findAll().then(res => console.log(res));