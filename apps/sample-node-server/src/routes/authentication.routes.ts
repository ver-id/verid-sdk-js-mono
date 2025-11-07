import { Router } from 'express';
import { 
  initializeAuthClient, 
  generateAuthCodeChallenge,
  createAuthIntent,
  generateAuthUrl, 
  handleAuthCallback, 
  finalizeAuth, 
  getAuthCallbackInfo, 
  decodeAuthToken 
} from '../controllers/index.js';

const router = Router();

/**
 * POST /api/authentication/initialize
 * Initialize an authentication client
 */
router.post('/initialize', initializeAuthClient);

/**
 * POST /api/authentication/generate-code-challenge
 * Generate PKCE code challenge and state
 */
router.post('/generate-code-challenge', generateAuthCodeChallenge);

/**
 * POST /api/authentication/create-intent
 * Create authentication intent
 */
router.post('/create-intent', createAuthIntent);

/**
 * POST /api/authentication/generate-url
 * Generate authentication URL
 */
router.post('/generate-url', generateAuthUrl);

/**
 * GET /api/authentication/callback
 * Handle OAuth callback
 */
router.get('/callback', handleAuthCallback);

/**
 * GET /api/authentication/callback-info
 * Get callback URL and params
 */
router.get('/callback-info', getAuthCallbackInfo);

/**
 * POST /api/authentication/finalize
 * Finalize OAuth flow (exchange code for tokens)
 */
router.post('/finalize', finalizeAuth);

/**
 * POST /api/authentication/decode
 * Decode ID token
 */
router.post('/decode', decodeAuthToken);

export default router;
