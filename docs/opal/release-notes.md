# E2/E3 · Opal — Release Notes Carparts

- **Nome:** Release Notes Carparts
- **Dono:** Jonathan Willian (desenvolvedor)
- **Finalidade:** transformar mensagens de commit fictícias ou públicas em notas de versão padronizadas para revisão humana.
- **Link publicado:** a preencher após a publicação no Opal
- **Criado em:** 19/09/2026
- **Próxima revisão:** 19/10/2026
- **Frequência de revisão:** mensal e sempre que o modelo, prompt, permissões ou guia de estilo mudar.

## Fluxo visual

| # | Tipo | Nome | Modelo/ferramenta | Entrada/saída |
|---|---|---|---|---|
| 1 | User Input | Commits da versão | Texto multilinha | Mensagens fictícias ou públicas |
| 2 | Generate | Classificar mudanças | Gemini Flash; `@Commits da versão`; asset `@Guia de estilo` | Itens classificados e itens para revisão |
| 3 | Generate | Redigir notas | Gemini Flash; `@Classificar mudanças`; asset `@Guia de estilo` | Página final conforme vocabulário e ordem obrigatória |
| 4 | Output | Página de notas | Webpage | Preview das notas para revisão |
| 5 | Output | Salvar no Google Docs | Google Docs | Documento de rascunho revisável |

## Permissões e publicação

- O app nasce privado e será publicado com acesso de **visualizador/usuário**, nunca editor dos prompts.
- O professor receberá o link publicado para execução e conferência.
- Alterações nos prompts exigem registro no repositório e nova execução dos casos de referência.
- Qualquer texto destinado a cliente precisa de homologação e aprovação registradas pela engenharia.

## Dados permitidos

Somente mensagens de commit fictícias ou públicas. São proibidos nomes de clientes, pedidos reais, preços, dados pessoais, dados do ERP, credenciais, tokens e chaves de API.

## Assets e entradas de referência

- Asset: `Guia_de_estilo_Carparts.pdf`, versão 1.0 de 18/09/2026.
- Entradas fixas: `rel-001`, `rel-002` e `rel-003`, copiadas em `docs/opal/entradas-referencia.md`.
- Conjunto dourado automatizado: `eval/golden.jsonl`, casos `rel-001` a `rel-012`.

## Critérios de aceite

As três entradas devem executar sem erro; hashes, merges e termos proibidos não podem aparecer; caso ambíguo deve ir para “Itens para revisão do tech lead”; saídas devem respeitar categorias, ordem e limite de 20 palavras.

## Inventário e governança

| Item | Valor |
|---|---|
| Ambiente | Google Opal (experimento) |
| Papel na esteira | Protótipo e apoio, nunca produção direta |
| Prompt promovido | `prompts/release-notes.v3.md` |
| Implementação | `src/release-notes.mjs` |
| Quality gate | `.github/workflows/ci.yml`, mínimo 90% |
| Responsável pela aprovação | Tech lead/engenharia Carparts |
