import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const content = readFileSync(join(process.cwd(), "public", "ex3-content.txt"), "utf-8");
  res.setHeader("Content-Type", "text/plain");
  res.send(content);
}
