import { Router } from 'express';
import authenticationRoutes from './authentication.routes.js';
import disclosureRoutes from './disclosure.routes.js';
import issuanceRoutes from './issuance.routes.js';
import embeddedAuthenticationRoutes from './embedded-authentication.routes.js';
import embeddedDisclosureRoutes from './embedded-disclosure.routes.js';
import embeddedIssuanceRoutes from './embedded-issuance.routes.js';

const router = Router();

// Mount embedded routes before their redirect-based counterparts so the more
// specific `/embedded` prefix is matched first.
router.use('/authentication/embedded', embeddedAuthenticationRoutes);
router.use('/disclosure/embedded', embeddedDisclosureRoutes);
router.use('/issuance/embedded', embeddedIssuanceRoutes);

router.use('/authentication', authenticationRoutes);
router.use('/disclosure', disclosureRoutes);
router.use('/issuance', issuanceRoutes);

export default router;
