import {Router} from 'express';
import controller from '../controllers/index.controller.js';
const router = Router();



router.get('/brokerage', controller.getAllclientfile);



/*
// Not Found Middleware (404)
router.use((req, res) => {
    res.status(404).json({ error: "Ressource not found" });
  });
*/

export default router;