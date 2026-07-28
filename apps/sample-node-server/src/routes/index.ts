import { Router } from 'express';
import authenticationRoutes from './authentication.routes.js';
import disclosureRoutes from './disclosure.routes.js';
import issuanceRoutes from './issuance.routes.js';
import embeddedDisclosureRoutes from './embedded-disclosure.routes.js';

const router = Router();

// Mount embedded routes before their redirect-based counterparts so the more
// specific `/embedded` prefix is matched first.
router.use('/disclosure/embedded', embeddedDisclosureRoutes);

// Mount authentication routes
router.use('/authentication', authenticationRoutes);

// Mount disclosure routes
router.use('/disclosure', disclosureRoutes);

// Mount issuance routes
router.use('/issuance', issuanceRoutes);

export default router;
