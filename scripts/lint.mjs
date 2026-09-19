import { readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";

async function arquivos(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory() && ![".git", "node_modules"].includes(entry.name)) found.push(...await arquivos(path));
    else if (entry.isFile() && path.endsWith(".mjs")) found.push(path);
  }
  return found;
}

let falhas = 0;
for (const file of await arquivos(".")) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (result.status !== 0) {
    console.error(result.stderr);
    falhas++;
  }
}
console.log(falhas ? `Lint reprovado: ${falhas} arquivo(s).` : "Lint aprovado: sintaxe válida em todos os arquivos .mjs.");
process.exitCode = falhas ? 1 : 0;
