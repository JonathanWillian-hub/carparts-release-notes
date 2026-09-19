# SAP1-DEVOPS · Release Notes Carparts

Entrega completa da atividade prática da Aula 07: protótipo no Google Opal promovido para código, versionamento e quality gates de CI/CD.

## Evidências por entregável

| Entregável | Evidência no repositório |
|---|---|
| E1 · Mapa de oportunidades | [`docs/e1-mapa-oportunidades.md`](docs/e1-mapa-oportunidades.md) |
| E2 · Opal publicada | [`docs/opal/release-notes.md`](docs/opal/release-notes.md), entradas e pasta de evidências |
| E3 · Ficha e governança | [`docs/opal/release-notes.md`](docs/opal/release-notes.md) |
| E4 · Ponte AI Studio | [`prompts/release-notes.v3.md`](prompts/release-notes.v3.md), [`src/release-notes.mjs`](src/release-notes.mjs) e [`docs/e4-ai-studio.md`](docs/e4-ai-studio.md) |
| E5 · Quality gate | [`.github/workflows/ci.yml`](.github/workflows/ci.yml), `Jenkinsfile`, `eval/golden.jsonl` e logs |
| E6 · Métricas e evolução | [`docs/e6-metricas-custo-evolucao.md`](docs/e6-metricas-custo-evolucao.md) |

## Executar localmente

Requer Node.js 22 ou superior. A avaliação padrão usa um provedor determinístico, não envia dados e não gera custo.

```bash
npm ci
npm run check
```

Para comprovar a reprovação intencional:

```bash
EVAL_MIN=1.01 npm run eval
```

Para comparar com a Gemini API, configure a chave somente no ambiente e selecione o provedor real:

```bash
export GEMINI_API_KEY="sua-chave"
EVAL_PROVIDER=gemini npm run eval
```

Nunca inclua a chave em arquivo versionado, issue, print ou log.

## Estrutura

```text
prompts/       prompt v3 promovido
eval/          12 casos do conjunto dourado
src/           código JavaScript com Structured output
scripts/       lint e avaliador do prompt
test/          testes unitários sem chamada externa
docs/          E1, E3, E4, E6 e evidências
.github/       Actions e CODEOWNERS
```

## Política de dados

Este projeto usa somente dados fictícios ou públicos. Texto produzido por IA é rascunho e não pode chegar ao cliente sem homologação e aprovação registrada pela engenharia.
