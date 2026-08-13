import { Router } from 'express';
import {
  initializeEmbeddedIssuanceClient,
  startEmbeddedIssuanceSession,
  handleEmbeddedIssuanceWebhook,
  getEmbeddedIssuanceResult,
} from '../controllers/index.js';

const router = Router();

/**
 * POST /api/issuance/embedded/initialize
 * Initialize an embedded issuance client
 */
router.post('/initialize', initializeEmbeddedIssuanceClient);

/**
 * POST /api/issuance/embedded/start
 * Create an embedded session plus its mandatory issuance intent
 */
router.post('/start', startEmbeddedIssuanceSession);

/**
 * POST /api/issuance/embedded/webhook
 * Signed, server-to-server webhook carrying the authorization code.
 * Receives a RAW body — see EMBEDDED_WEBHOOK_PATHS in config.
 */
router.post('/webhook', handleEmbeddedIssuanceWebhook);

/**
 * GET /api/issuance/embedded/result
 * Poll for the finalized result of an embedded flow
 */
router.get('/result', getEmbeddedIssuanceResult);

export default router;
