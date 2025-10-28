import { Router } from 'express';
import authRoutes from './auth.routes.js';
import disclosureRoutes from './disclosure.routes.js';

const router = Router();

// Mount auth routes
router.use('/auth', authRoutes);

// Mount disclosure routes
router.use('/disclosure', disclosureRoutes);

export default router;
