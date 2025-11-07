import { Router } from 'express';
import authenticationRoutes from './authentication.routes.js';
import disclosureRoutes from './disclosure.routes.js';
import issuanceRoutes from './issuance.routes.js';

const router = Router();

// Mount authentication routes
router.use('/authentication', authenticationRoutes);

// Mount disclosure routes
router.use('/disclosure', disclosureRoutes);

// Mount issuance routes
router.use('/issuance', issuanceRoutes);

export default router;
