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
    console.log(req.body); // Affichez le corps de la requête pour le débogage

    try {
        const {
            email,
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
        } = req.body;

        // Définition de datePattern pour valider le format YYYY-MM-DD
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        // Validation des champs
        if (!email || typeof email !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: email" });
        }
        if (!firstname1 || typeof firstname1 !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: firstname1" });
        }
        if (!lastname1 || typeof lastname1 !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: lastname1" });
        }
        if (!datebirth1 || !datePattern.test(datebirth1)) {
            return res.status(400).json({ error: "Invalid date format: datebirth1 should be in YYYY-MM-DD format" });
        }
        if (!firstname2 || typeof firstname2 !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: firstname2" });
        }
        if (!lastname2 || typeof lastname2 !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: lastname2" });
        }
        if (!datebirth2 || !datePattern.test(datebirth2)) {
            return res.status(400).json({ error: "Invalid date format: datebirth2 should be in YYYY-MM-DD format" });
        }
        if (numberchild !== undefined) {
            const parsedNumberchild = parseInt(numberchild);
            if (!Number.isInteger(parsedNumberchild) || parsedNumberchild < 0) {
                return res.status(400).json({ error: "Invalid type: numberchild should be an integer equal to or above 0" });
            }
        }
        if (!maritalstatus || typeof maritalstatus !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: maritalstatus" });
        }
        if (!nationality || typeof nationality !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: nationality" });
        }
        if (!residencestatus || typeof residencestatus !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: residencestatus" });
        }
        if (!address || typeof address !== "string") {
            return res.status(400).json({ error: "Missing or invalid body parameter: address" });
        }

        // Création du Clientfile
        const createdClientfile = await Clientfile.create({
            email,
            firstname1,
            lastname1,
            datebirth1,
            firstname2,
            lastname2,
            datebirth2,
            numberchild: parseInt(numberchild), // convertir numberchild en entier
            maritalstatus,
            nationality,
            residencestatus,
            address
        });

        console.log("Clientfile created:", createdClientfile); // Log du Clientfile créé

        // Réponse avec le Clientfile créé
        res.status(201).json(createdClientfile);
    } catch (error) {
        console.error("Error creating Clientfile:", error); // Log de l'erreur

        // Réponse en cas d'erreur serveur
        res.status(500).json({ error: "Unexpected server error. Please try again later." });
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
