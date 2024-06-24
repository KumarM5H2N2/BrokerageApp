
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
res.send("ok");
}

export default {
    getAllclientfile, getAlluseraccess, createClientfile
};


