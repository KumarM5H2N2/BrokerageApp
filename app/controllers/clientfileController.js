import { Clientfile } from '../models/index.js';
import Joi from 'joi';

export async function getAllclientfile(req,res) {
    const clientfile = await Clientfile.findAll();
    res.json(clientfile);
}



export async function getOneClientfile(req,res) {

  const clientfileId = Number.parseInt(req.params.id, 10); // Récupérer l'ID du clientfile à trouver
  if (isNaN(clientfileId)) { // Si c'est pas un nombre => rejette 400
    return res.status(400).json({ error: "Clientfile ID should be a valid integer" });
  }
  
  const clientfile = await Clientfile.findByPk(clientfileId); // On récupère le clientfile dans la BDD 
  if (!clientfile) { // Si elle existe pas ==> 404
    return res.status(404).json({ error: "Clientfile not found" });
  }

  res.json(clientfile);

}




export async function createClientfile(req, res) {
console.log(req.body);
try{
const {email,firstname1,lastname1,datebirth1,firstname2,lastname2,datebirth2,numberchild,maritalstatus,nationality,residencestatus,address} = req.body

if (!email || typeof email !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: email" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }

  if (!firstname1 || typeof firstname1 !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: firstname1" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }

  if (!lastname1 || typeof lastname1 !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: lastname1" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }


  if (!datebirth1 || typeof datebirth1 !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: datebirth1" });
    return;
  }
   
  // Vérifier si datebirth1 est au format valide YYYY-MM-DD
  const datePattern1 = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern1.test(datebirth1)) {
    res.status(400).json({ error: "Invalid date format: datebirth1 should be in YYYY-MM-DD format" });
    return;
  }
  
if (!firstname2 || typeof firstname2 !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: firstname2" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }

  if (!lastname2 || typeof lastname2 !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: lastname2" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }

  
  if (!datebirth2 || typeof datebirth2 !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: datebirth2" });
    return;
  }
  
  // Vérifier si datebirth1 est au format valide YYYY-MM-DD
  const datePattern2 = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern2.test(datebirth2)) {
    res.status(400).json({ error: "Invalid date format: datebirth1 should be in YYYY-MM-DD format" });
    return;
  }
  
  
// VALIDATION : Si la numberchild est fournie, ALORS il faut vérifier que c'est un nombre valide !
if (numberchild !== undefined) { // Si position est fournie
    if (!Number.isInteger(numberchild) || numberchild < 0) { // Si position n'est pas un entier ou est inférieure à zéro
      return res.status(400).json({ error: "Invalid type: numberchild should be an integer equal to or above 0" });
    }
  }
  

 if (!maritalstatus || typeof maritalstatus !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: maritalstatus" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }

  if (!nationality || typeof nationality !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: nationality" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }

  if (!residencestatus || typeof residencestatus !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: residencestatus" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }


  if (!address || typeof address !== "string") {
    res.status(400).json({ error: "Missing or invalid body parameter: address" }); // Etape 1 : répondre au client => envoyer la réponse HTTP
    return; // Etape 2 : arrêter la fonction, éviter de lire la suite
  }



 // Créer le clientfile en BDD 
 const createdClientfile = await Clientfile.create({
    email, // Sucre syntaxique pour "email: email"
    firstname1,
    lastname1,
    datebirth1,
    firstname2,
    lastname2,
    datebirth2,
    numberchild,
    maritalstatus,
    nationality,
    residencestatus,
    address


  });

    // En cas d'erreurs renvoyer le status et le message approprié !
    res.status(201).json(createdClientfile);

} catch(error) {
console.error(error);
res.status(500).json({error:"Unexpected server error. Please try come back later"});
}
}


export async function deleteClientfile(req,res) {

 // Récupérer l'ID dans les params
 const clientfileId = Number.parseInt(req.params.id, 10); // Récupérer l'ID du clientfile à trouver
 if (isNaN(clientfileId)) { // Si c'est pas un nombre => rejette 400
   return res.status(400).json({ error: "Clientfile ID should be a valid integer" });
 }
 
 const clientfile = await Clientfile.findByPk(clientfileId); // On récupère le clientfile dans la BDD 
 if (!clientfile) { // Si elle existe pas ==> 404
   return res.status(404).json({ error: "Clientfile not found" });
 }

 await clientfile.destroy(); // On supprime le clientfile de la BDD

 res.status(204).end(); // On termine la requête sans envoyer de body
}



export async function updateClientfile(req, res) {
  const clientfileId = parseInt(req.params.id);
  if (isNaN(clientfileId)) {
    return res.status(400).json({ error: "Clientfile ID should be a valid integer" });
  }

  const body = req.body;
  const updateClientfileSchema = Joi.object({
    email: Joi.string().min(1),
    firstname1: Joi.string().min(1),
    lastname1: Joi.string().min(1),
    datebirth1: Joi.date(),
    firstname2: Joi.string().min(1),
    lastname2: Joi.string().min(1),
    datebirth2: Joi.date(),
    numberchild: Joi.number().integer().min(0),
    maritalstatus: Joi.string().min(1),
    nationality: Joi.string().min(1),
    residencestatus: Joi.string().min(1),
    address: Joi.string().min(1),
  }).min(1).message("Missing body parameters. Provide at least one required parameter.");

  const { error } = updateClientfileSchema.validate(body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  try {
    const clientfile = await Clientfile.findByPk(clientfileId);
    if (!clientfile) {
      return res.status(404).json({ error: "Clientfile not found" });
    }

    const updatedClientfile = await clientfile.update({
      email: body.email || clientfile.email,
      firstname1: body.firstname1 || clientfile.firstname1,
      lastname1: body.lastname1 || clientfile.lastname1,
      datebirth1: body.datebirth1 || clientfile.datebirth1,
      firstname2: body.firstname2 || clientfile.firstname2,
      lastname2: body.lastname2 || clientfile.lastname2,
      datebirth2: body.datebirth2 || clientfile.datebirth2,
      numberchild: body.numberchild || clientfile.numberchild,
      maritalstatus: body.maritalstatus || clientfile.maritalstatus,
      nationality: body.nationality || clientfile.nationality,
      residencestatus: body.residencestatus || clientfile.residencestatus,
      address: body.address || clientfile.address,
    });

    res.json(updatedClientfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update Clientfile" });
  }
}



export default {
  getAllclientfile,
  getOneClientfile,
  createClientfile,
  deleteClientfile,
  updateClientfile
};
