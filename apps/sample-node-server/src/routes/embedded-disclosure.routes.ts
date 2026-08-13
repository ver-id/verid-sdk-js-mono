import { Router } from 'express';
import {
  initializeEmbeddedDisclosureClient,
  startEmbeddedDisclosureSession,
  handleEmbeddedDisclosureWebhook,
  getEmbeddedDisclosureResult,
} from '../controllers/index.js';

const router = Router();

/**
 * POST /api/disclosure/embedded/initialize
 * Initialize an embedded disclosure client
 */
router.post('/initialize', initializeEmbeddedDisclosureClient);

/**
 * POST /api/disclosure/embedded/start
 * Create an embedded session and return the browser bootstrap
 */
router.post('/start', startEmbeddedDisclosureSession);

/**
 * POST /api/disclosure/embedded/webhook
 * Signed, server-to-server webhook carrying the authorization code.
 * Receives a RAW body — see EMBEDDED_WEBHOOK_PATHS in config.
 */
router.post('/webhook', handleEmbeddedDisclosureWebhook);

/**
 * GET /api/disclosure/embedded/result
 * Poll for the finalized result of an embedded flow
 */
router.get('/result', getEmbeddedDisclosureResult);

export default router;
