import { getAlluseraccess } from './useraccessController.js';
import { createClientfile, getAllclientfile, getOneClientfile,deleteClientfile,updateClientfile} from './clientfileController.js';
import { getAllSavingsdistribution,createSavingsdistribution } from './savingsdistributionController.js';
import {getHomePage} from './mainControllerviews.js'






const controller = {

      getHomePage,


  getAllclientfile,
  getOneClientfile,
  createClientfile,
  deleteClientfile,
  updateClientfile,

 

  getAllSavingsdistribution, 
  createSavingsdistribution,



  getAlluseraccess 

};

export default controller;


