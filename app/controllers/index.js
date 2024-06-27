import { getAlluseraccess } from './useraccessController.js';
import { createClientfile, getAllclientfile, getOneClientfile,deleteClientfile,updateClientfile} from './clientfileController.js';








const controller = {
  getAllclientfile,
  getOneClientfile,
  createClientfile,
  deleteClientfile,
  updateClientfile,
  getAlluseraccess 
};

export default controller;


