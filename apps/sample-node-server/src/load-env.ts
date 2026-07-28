import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { config as loadDotenv } from 'dotenv';

/**
 * Loads the sample server's `.env` before anything reads `process.env`.
 *
 * The controllers fall back to `process.env.VERID_*` when the request body
 * omits `issuerUri` / `client_id` / `redirectUri` (which the Vue "Node flow"
 * views do by design), so these values must be present in the environment.
 *
 * `nx serve` launches the built server from the workspace root, while a direct
 * run uses the app (or `dist`) directory, so we probe a few candidate locations
 * and load the first `.env` we find.
 */
const candidates = [
  resolve(process.cwd(), '.env'),
  resolve(process.cwd(), 'apps/sample-node-server/.env'),
];

// The build emits CommonJS (esbuild `format: "cjs"`), so `__dirname` exists at
// runtime and points at `apps/sample-node-server/dist`.
if (typeof __dirname !== 'undefined') {
  candidates.push(resolve(__dirname, '..', '.env'));
}

const envPath = candidates.find((path) => existsSync(path));

if (envPath) {
  loadDotenv({ path: envPath });
  console.log(`[env] loaded ${envPath}`);
} else {
  console.warn(
    '[env] no .env file found; relying on the existing process environment',
  );
}
