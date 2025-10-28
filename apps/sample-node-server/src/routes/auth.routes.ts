import { Router } from 'express';
import { initializeAuthClient, generateAuthUrl, handleAuthCallback, finalizeAuth, getAuthCallbackInfo, decodeAuthToken } from '../controllers/index.js';

const router = Router();

/**
 * POST /api/auth/initialize
 * Initialize an authentication client
 */
router.post('/initialize', initializeAuthClient);

/**
 * POST /api/auth/generate-url
 * Generate authentication URL
 */
router.post('/generate-url', generateAuthUrl);

/**
 * GET /api/auth/callback
 * Handle OAuth callback
 */
router.get('/callback', handleAuthCallback);

/**
 * GET /api/auth/callback-info
 * Get callback URL and params
 */
router.get('/callback-info', getAuthCallbackInfo);

/**
 * POST /api/auth/finalize
 * Finalize OAuth flow (exchange code for tokens)
 */
router.post('/finalize', finalizeAuth);

/**
 * POST /api/auth/decode
 * Decode ID token
 */
router.post('/decode', decodeAuthToken);

export default router;
