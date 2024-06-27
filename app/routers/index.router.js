import {Router} from 'express';
import controller from '../controllers/index.js';
const router = Router();



router.get('/clientfiles', controller.getAllclientfile);
router.get('/clientfiles/:id', controller.getOneClientfile);
router.post('/clientfiles', controller.createClientfile);
router.delete("/clientfiles/:id", controller.deleteClientfile);
router.patch("/clientfiles/:id", controller.updateClientfile);

router.get('/brokeragee', controller.getAlluseraccess);

  /*
// Not Found Middleware (404)
router.use((req, res) => {
    res.status(404).json({ error: "Ressource not found" });
  });
*/

export default router;