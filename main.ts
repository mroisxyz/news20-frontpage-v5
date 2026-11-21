import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, 'entry.png');
const destination = join(outDir, 'entry.png');

console.error(`[news20-v5-entry] output dir: ${outDir}`);
console.error(`[news20-v5-entry] copying entry.png to ${destination}`);

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

const bytes = statSync(destination).size;
console.error(`[news20-v5-entry] copy complete (${bytes} bytes)`);
