import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDirectory, { recursive: true });
await copyFile(new URL('./entry.png', import.meta.url), join(outputDirectory, 'entry.png'));
