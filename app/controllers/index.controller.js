
import { Clientfile, Savingsdistribution, Useraccess, UseraccessHasClientfile } from '../models/index.js';


export async function getAllclientfile(req,res) {
    const clientfile = await Clientfile.findAll();
    res.json(clientfile);
}


export async function getAlluseraccess(req,res) {
    const useraccess = await Useraccess.findAll();
    res.json(useraccess);
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















export default {
    getAllclientfile, getAlluseraccess, createClientfile
};


