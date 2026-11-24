import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter: "A" — coffee. Dev fuel: the first thing that makes the day
// work, and A is the first, best pick — the honest answer for a developer.
const line = "A";

// The gate allows exactly 1 character; refuse to write anything else.
if (line.length !== 1) {
  throw new Error(`entry text is ${line.length} characters, must be exactly 1`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
