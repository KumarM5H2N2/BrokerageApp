import { Clientfile, Savingsdistribution, Useraccess, UseraccessHasClientfile } from '../models/index.js';


export async function getAllclientfile(req,res) {
    const clientfile = await Clientfile.findAll();

    res.json(clientfile);
}





export default {
    getAllclientfile
};



