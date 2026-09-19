import test from "node:test";
import assert from "node:assert/strict";
import { validarSaida } from "../src/release-notes.mjs";
import { gerarFixture } from "../src/fixture-provider.mjs";

test("ignora merge, dependências, testes e CI", () => {
  const out = gerarFixture("Merge branch x\nabc1234 chore(deps): bump x\ndef5678 test: cobre serviço\naaa1111 ci: ajusta pipeline");
  assert.equal(out.itens.length, 0);
});

test("classifica funcionalidade, correção e segurança", () => {
  const out = gerarFixture("aaa1111 feat(pedidos): anexa PDF\nbbb2222 fix(api): timeout\nccc3333 security: remove chave");
  assert.deepEqual(out.itens.map((x) => x.tipo), ["Nova funcionalidade", "Correção", "Segurança"]);
});

test("envia linha ambígua para Revisar", () => {
  const out = gerarFixture("e0f1a2b wip");
  assert.equal(out.itens[0].tipo, "Revisar");
});

test("rejeita hash ou resumo acima de 20 palavras", () => {
  assert.throws(() => validarSaida({ itens: [{ tipo: "Correção", resumo: "Corrige abc1234", modulo: "x" }] }), /Hash/);
  assert.throws(() => validarSaida({ itens: [{ tipo: "Correção", resumo: "um dois três quatro cinco seis sete oito nove dez onze doze treze catorze quinze dezesseis dezessete dezoito dezenove vinte vinteum", modulo: "x" }] }), /20 palavras/);
});
