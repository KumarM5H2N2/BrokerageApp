import { Clientfile } from "./clientfile.js";
import { Savingsdistribution } from "./savingsdistribution.js";
import { Realestatedistribution } from "./realestatedistribution.js";
import { Incomedistribution } from "./incomedistribution.js";
import { Expensesotherthancredit } from "./expensesotherthancredit.js";
import { Creditdistribution } from "./creditdistribution.js";
import { Useraccess } from "./useraccess.js";
import { sequelize } from "./sequelize-client.js";

export { Clientfile, Savingsdistribution, Useraccess };

//Clientfile <---> Savingsdistribution
Clientfile.hasMany(Savingsdistribution, {
    as: "savingsdistribution", // When i request a CLENTFILE, i want those SAVINGSDISTRIBUTION 
    foreignKey:"clientfile_id"
});


Savingsdistribution.belongsTo(Clientfile, {
    as: "clientfile",
    foreignKey:"clientfile_id"
});

/*
// Test : à partir d'un clientfile je peux récupérer les savingsdistribution !
Clientfile.findOne({ include: "savingsdistribution" }).then(res => console.log(res.toJSON()));



// Test : à partir d'une carte, je peux récupérer sa liste 
Savingsdistribution.findOne({ include: "clientfile" }).then(res => console.log(res.toJSON()));
*/




// Useraccess <---> Clientfile
// Many-to-Many

export const UseraccessHasClientfile = sequelize.define("useraccess_has_clientfile", {}, { tableName: "useraccess_has_clientfile" });




Useraccess.belongsToMany(Clientfile,{
    as:"clientfiles",
    through: "useraccess_has_clientfile",
    foreignKey:"useraccess_id",
    otherKey:"clientfile_id"
});


Clientfile.belongsToMany(Useraccess,{
    as:"useraccesss",
    through: "useraccess_has_clientfile",
    foreignKey:"clientfile_id",
    otherKey:"useraccess_id"
});


/*
// Test : à partir d'un clientfile, je récupère tous ses useraccess
Clientfile.findOne({ include: "useraccesss" }).then(res => console.log(res.toJSON()));


// Test : à partir d'un useraccess, je récupère les clientfile associé à ce useraccess
Useraccess.findOne({ include: "clientfiles" }).then(res => console.log(res.toJSON()));
*/