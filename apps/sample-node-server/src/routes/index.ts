import { Router } from 'express';
import authenticationRoutes from './authentication.routes.js';
import disclosureRoutes from './disclosure.routes.js';

const router = Router();

// Mount authentication routes
router.use('/authentication', authenticationRoutes);

// Mount disclosure routes
router.use('/disclosure', disclosureRoutes);

export default router;
