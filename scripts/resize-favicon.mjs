import sharp from 'sharp';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const input = join(publicDir, 'favicon.png');

for (const size of [32, 48, 96, 192]) {
  await sharp(input)
    .resize(size, size)
    .toFile(join(publicDir, `favicon-${size}.png`));
  console.log(`Created favicon-${size}.png`);
}
