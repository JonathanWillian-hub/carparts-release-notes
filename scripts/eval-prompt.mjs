import { readFile } from "node:fs/promises";
import { gerarReleaseNotes, validarSaida } from "../src/release-notes.mjs";
import { gerarFixture } from "../src/fixture-provider.mjs";

const provider = process.env.EVAL_PROVIDER ?? "fixture";
const min = Number(process.env.EVAL_MIN ?? "0.90");
const raw = await readFile("eval/golden.jsonl", "utf8");
const casos = raw.split("\n").filter(Boolean).map((linha) => JSON.parse(linha));
let aprovados = 0;

for (const caso of casos) {
  const saida = provider === "gemini"
    ? await gerarReleaseNotes(caso.input)
    : gerarFixture(caso.input, caso.id);
  validarSaida(saida);
  const serializado = JSON.stringify(saida).toLowerCase();
  const inclui = caso.must_include.every((item) => serializado.includes(item.toLowerCase()));
  const exclui = caso.must_not_include.every((item) => !serializado.includes(item.toLowerCase()));
  const ok = inclui && exclui;
  console.log(`${ok ? "PASS" : "FAIL"} ${caso.id}`);
  if (!ok) {
    if (!inclui) console.log(`  faltou: ${caso.must_include.filter((x) => !serializado.includes(x.toLowerCase())).join(", ")}`);
    if (!exclui) console.log(`  proibido: ${caso.must_not_include.filter((x) => serializado.includes(x.toLowerCase())).join(", ")}`);
  }
  aprovados += Number(ok);
}

const taxa = aprovados / casos.length;
const custo = provider === "gemini" ? casos.length * 0.00015 : 0;
console.log(`Provedor: ${provider}`);
console.log(`Taxa de aprovação: ${(taxa * 100).toFixed(1)}% (${aprovados}/${casos.length}); mínimo ${(min * 100).toFixed(1)}%`);
console.log(`Custo estimado desta execução: US$ ${custo.toFixed(4)}`);
process.exitCode = taxa >= min ? 0 : 1;
