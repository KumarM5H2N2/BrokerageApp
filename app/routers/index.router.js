import {Router} from 'express';
const router = Router();

// Not Found Middleware (404)
router.use((req, res) => {
    res.status(404).json({ error: "Ressource not found" });
  });


export default router;