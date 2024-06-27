import { Useraccess } from '../models/index.js';




export async function getAlluseraccess(req,res) {
    const useraccess = await Useraccess.findAll();
    res.json(useraccess);
}






export default {
    getAlluseraccess
};