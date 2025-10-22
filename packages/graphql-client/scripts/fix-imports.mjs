#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

const filePath = process.argv[2];
if (!filePath) {
  console.error('No file path provided');
  process.exit(1);
}

try {
  let content = readFileSync(filePath, 'utf-8');
  
  // Add .js extension to relative imports that don't already have it
  content = content.replace(
    /from ['"](\.\.[^'"]*?)(?<!\.js)['"]/g,
    (match, path) => `from '${path}.js'`
  );
  
  writeFileSync(filePath, content, 'utf-8');
} catch (error) {
  console.error(`Error processing file ${filePath}:`, error);
  process.exit(1);
}
