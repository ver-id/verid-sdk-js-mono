import express from 'express';
import { 
  initializeIssuanceClient,
  generateIssuanceCodeChallenge,
  createIssuanceIntent,
  generateIssuanceUrl,
  handleIssuanceCallback,
  finalizeIssuance,
} from '../controllers/index.js';

const router = express.Router();

// Initialize the issuance client
router.post('/initialize', initializeIssuanceClient);

// Generate code challenge (mandatory for issuance)
router.post('/generate-code-challenge', generateIssuanceCodeChallenge);

// Create issuance intent (mandatory for issuance)
router.post('/create-intent', createIssuanceIntent);

// Generate issuance URL (requires intent)
router.post('/generate-url', generateIssuanceUrl);

// Handle OAuth callback
router.get('/callback', handleIssuanceCallback);

// Finalize the issuance (exchange code for tokens)
router.post('/finalize', finalizeIssuance);

export default router;
