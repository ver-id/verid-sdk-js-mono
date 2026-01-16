// Disable TLS verification for development (NOT for production!)
// This is needed for self-signed certificates in development environments
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

import express from 'express';
import cors from 'cors';
import { SERVER_CONFIG } from './config/index.js';
import routes from './routes/index.js';

const app = express();

// Middleware
app.use(cors());
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
});
