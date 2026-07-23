// Image budget guard — fails if any raster image in public/img exceeds the budget.
// Run with: npm run check:images   (wire into CI to prevent regressions)
import { promises as fs } from "fs";
import path from "path";

const ROOT = path.resolve("public/img");
const BUDGET_KB = 500;
const RASTER = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"]);

const offenders = [];

async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { await walk(full); continue; }
    if (!RASTER.has(path.extname(entry.name).toLowerCase())) continue;
    const { size } = await fs.stat(full);
    if (size > BUDGET_KB * 1024) {
      offenders.push({ file: path.relative(ROOT, full), kb: Math.round(size / 1024) });
    }
  }
}

await walk(ROOT);

if (offenders.length) {
  console.error(`✗ ${offenders.length} image(s) exceed the ${BUDGET_KB}KB budget:`);
  offenders.sort((a, b) => b.kb - a.kb).forEach((o) => console.error(`  ${o.kb}KB  ${o.file}`));
  console.error("\nCompress with sharp/squoosh before committing (originals: design-assets/).");
  process.exit(1);
} else {
  console.log(`✓ All raster images in public/img are within the ${BUDGET_KB}KB budget.`);
}
