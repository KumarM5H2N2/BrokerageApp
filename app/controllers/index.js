import { getAlluseraccess } from './useraccessController.js';
import { createClientfile, getAllclientfile, getOneClientfile,deleteClientfile,updateClientfile} from './clientfileController.js';
import { getAllSavingsdistribution,createSavingsdistribution } from './savingsdistributionController.js';
import {getHomePage} from './mainControllerviews.js';
import{getAuthSignupPage, postAuthSignupPage, getAuthSigninPage,postAuthSigninPage,getSignout} from './authController.js';
import{getAdminPage} from './adminControllerviews.js';




const controller = {

  getHomePage,
  getAuthSignupPage,
  postAuthSignupPage,
  getAuthSigninPage,
  postAuthSigninPage,
  getSignout,



 getAdminPage,

  

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


