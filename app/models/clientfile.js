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
  },
   lastname1: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  datebirth1: {
    type: DataTypes.DATE,
    allowNull: false
  },
  firstname2: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  lastname2: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  datebirth2: {
    type: DataTypes.DATE,
    allowNull: true
  },
  numberchild: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  maritalstatus: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  nationality: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  residencestatus: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  sequelize, /* DB connection instance */
  tableName: "clientfile"
});

// To test it simply!
Clientfile.findAll().then(res => console.log(res));