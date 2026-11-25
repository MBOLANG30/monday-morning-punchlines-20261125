import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One joke about Monday mornings: the alarms themselves go on strike.
const JOKE =
  "I set five alarms for Monday morning. They unionized and all called in sick.";

// The grader mounts the output directory at /output; a local run can point
// elsewhere with MAKEFUN_OUTPUT_DIR. Only the folder's contents are ever
// touched — the folder itself is never removed.
// The gate accepts 1–200 characters; fail loudly instead of shipping an
// entry the scorer would mark invalid.
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error(`Joke must be 1-200 non-blank characters, got ${JOKE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
