import { Router } from 'express';
import { initializeDisclosureClient, generateDisclosureUrl, handleDisclosureCallback, finalizeDisclosure, getDisclosureCallbackInfo, decodeDisclosureToken } from '../controllers/index.js';

const router = Router();

/**
 * POST /api/disclosure/initialize
 * Initialize a disclosure client
 */
router.post('/initialize', initializeDisclosureClient);

/**
 * POST /api/disclosure/generate-url
 * Generate disclosure URL
 */
router.post('/generate-url', generateDisclosureUrl);

/**
 * GET /api/disclosure/callback
 * Handle OAuth callback
 */
router.get('/callback', handleDisclosureCallback);

/**
 * GET /api/disclosure/callback-info
 * Get callback URL and params
 */
router.get('/callback-info', getDisclosureCallbackInfo);

/**
 * POST /api/disclosure/finalize
 * Finalize OAuth flow (exchange code for tokens)
 */
router.post('/finalize', finalizeDisclosure);

/**
 * POST /api/disclosure/decode
 * Decode ID token
 */
router.post('/decode', decodeDisclosureToken);

export default router;
