import {Router} from 'express';
import controller from '../controllers/index.js';
import userToLocals from '../middlewares/userToLocals.js';
import auth from '../middlewares/authorization.js';
const { isConnected, isAdmin } = auth;


const router = Router();




router.get("/", controller.getHomePage);

// Route to authentification 
router.get("/signup", controller.getAuthSignupPage);
router.post("/signup", controller.postAuthSignupPage);
router.get("/signin", controller.getAuthSigninPage);
router.post("/signin", controller.postAuthSigninPage);
router.get("/signout", controller.getSignout);

router.get("/admin", isConnected,isAdmin, controller.getAdminPage);


// Route to CRUD about clientfiles 
router.get('/clientfiles', controller.getAllclientfile);
router.get('/clientfiles/:id', controller.getOneClientfile);
router.post('/clientfiles', controller.createClientfile);
router.delete("/clientfiles/:id", controller.deleteClientfile);
router.patch("/clientfiles/:id", controller.updateClientfile);


router.get('/savingsdistributions', controller.getAllSavingsdistribution);
router.post('/savingsdistributions', controller.createSavingsdistribution);
/*
Bonus 
router.get("/clientfiles/:id/savingsdistribution", (savingsdistribution.getAllSavingsdistributionOfClientfile));
*/



router.get('/brokeragee', controller.getAlluseraccess);

  /*
// Not Found Middleware (404)
router.use((req, res) => {
    res.status(404).json({ error: "Ressource not found" });
  });
*/

export default router;