// Ce fichier index.js est un fichier passe-plat afin que depuis l'exterieur du dossier "models", 
//on puisse importer nos modèles de la manière suivante : // sans préciser index.js car c'est automatique !
//import { Clientfile } from "../models"; 

import { Clientfile, Savingsdistribution, Useraccess, UseraccessHasClientfile } from "./association.js";

export { Clientfile, Savingsdistribution, Useraccess, UseraccessHasClientfile }; 






