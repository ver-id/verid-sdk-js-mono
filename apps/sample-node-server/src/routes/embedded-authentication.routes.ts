import { Router } from 'express';
import {
  initializeEmbeddedAuthClient,
  startEmbeddedAuthSession,
  handleEmbeddedAuthWebhook,
  getEmbeddedAuthResult,
} from '../controllers/index.js';

const router = Router();

/**
 * POST /api/authentication/embedded/initialize
 * Initialize an embedded authentication client
 */
router.post('/initialize', initializeEmbeddedAuthClient);

/**
 * POST /api/authentication/embedded/start
 * Create an embedded session and return the browser bootstrap
 */
router.post('/start', startEmbeddedAuthSession);

/**
 * POST /api/authentication/embedded/webhook
 * Signed, server-to-server webhook carrying the authorization code.
 * Receives a RAW body — see EMBEDDED_WEBHOOK_PATHS in config.
 */
router.post('/webhook', handleEmbeddedAuthWebhook);

/**
 * GET /api/authentication/embedded/result
 * Poll for the finalized result of an embedded flow
 */
router.get('/result', getEmbeddedAuthResult);

export default router;
