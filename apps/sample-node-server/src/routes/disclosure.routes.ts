import { Router } from 'express';
import { 
  initializeDisclosureClient, 
  generateDisclosureCodeChallenge,
  createDisclosureIntent,
  generateDisclosureUrl, 
  handleDisclosureCallback, 
  finalizeDisclosure, 
  getDisclosureCallbackInfo, 
  decodeDisclosureToken 
} from '../controllers/index.js';

const router = Router();

/**
 * POST /api/disclosure/initialize
 * Initialize a disclosure client
 */
router.post('/initialize', initializeDisclosureClient);

/**
 * POST /api/disclosure/generate-code-challenge
 * Generate PKCE code challenge and state
 */
router.post('/generate-code-challenge', generateDisclosureCodeChallenge);

/**
 * POST /api/disclosure/create-intent
 * Create disclosure intent
 */
router.post('/create-intent', createDisclosureIntent);

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
