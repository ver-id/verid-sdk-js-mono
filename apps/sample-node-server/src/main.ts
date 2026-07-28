// Load environment variables from `.env` before anything reads `process.env`.
import './load-env.js';

// Disable TLS verification for development (NOT for production!)
// This is needed for self-signed certificates in development environments
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

import express from 'express';
import cors from 'cors';
import {
  EMBEDDED_CONFIG,
  EMBEDDED_WEBHOOK_PATHS,
  SERVER_CONFIG,
  isWebhookPubliclyReachable,
} from './config/index.js';
import { rawBodyText } from './middleware/index.js';
import routes from './routes/index.js';

const app = express();

// Middleware
app.use(cors());

// Embedded webhooks are HMAC-signed over the raw request bytes, so they must be
// captured as text *before* the JSON parser consumes the stream. Registering
// this first is safe: the JSON parser below skips any already-parsed request.
app.use(EMBEDDED_WEBHOOK_PATHS, rawBodyText);

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Ver.iD Node.js API Server',
    version: '1.0.0',
    status: 'running'
  });
});

// API routes
app.use('/api', routes);

// Start server
app.listen(SERVER_CONFIG.port, SERVER_CONFIG.host, () => {
  console.log(`[ ready ] http://${SERVER_CONFIG.host}:${SERVER_CONFIG.port}`);

  if (isWebhookPubliclyReachable()) {
    console.log(`[ embedded ] webhook base: ${EMBEDDED_CONFIG.webhookPublicUrl}`);
  } else {
    console.warn(
      '[ embedded ] VERID_WEBHOOK_PUBLIC_URL is unset or points at localhost. ' +
        'Embedded flows will not complete: the webhook is a server-to-server call from Ver.iD. ' +
        'In Garden, use your profile host (e.g. https://<profile>.ver.garden); ' +
        'otherwise run a tunnel such as `cloudflared tunnel --url http://localhost:3000`.',
    );
  }
});
