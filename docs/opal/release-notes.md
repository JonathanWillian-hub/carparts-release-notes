# E2/E3 · Opal — Release Notes Carparts

- **Nome:** Release Notes Carparts
- **Dono:** Jonathan Willian (desenvolvedor)
- **Finalidade:** transformar mensagens de commit fictícias ou públicas em notas de versão padronizadas para revisão humana.
- **Link publicado:** https://opal.google/app/1ssE1RQlwtGwnoK6jhpGNkd7Nx6sGuEpZ
- **Publicado em:** 19/09/2026 às 01:40 (BRT)
- **Criado em:** 19/09/2026
- **Próxima revisão:** 19/10/2026
- **Frequência de revisão:** mensal e sempre que o modelo, prompt, permissões ou guia de estilo mudar.

## Fluxo visual

| # | Tipo | Nome | Modelo/ferramenta | Entrada/saída |
|---|---|---|---|---|
| 1 | User Input | Commit List | Texto multilinha | Mensagens fictícias ou públicas no formato `hash mensagem` |
| 2 | Generate | Categorize Commits | Gemini; entrada de Commit List | Itens classificados e itens para revisão |
| 3 | Generate | Redigir Release Notes | Gemini; saída da classificação | Texto profissional sem hashes ou identificadores |
| 4 | Output | Release Notes | Webpage | Página responsiva com botão Salvar no Google Docs |
| 5 | Asset | Guia de estilo Carparts | Texto de referência | Linguagem, privacidade, categorias e padrão visual |

## Permissões e publicação

- Acesso público de **visualizador/usuário** para qualquer pessoa com o link.
- A opção **Allow access to editor view and remix** está desativada; visitantes não recebem acesso aos prompts.
- O professor pode executar e conferir o app pela URL publicada.
- Alterações nos prompts exigem registro no repositório e nova execução dos casos de referência.
- Qualquer texto destinado a cliente precisa de homologação e aprovação registradas pela engenharia.

## Dados permitidos

Somente mensagens de commit fictícias ou públicas. São proibidos nomes de clientes, pedidos reais, preços, dados pessoais, dados do ERP, credenciais, tokens e chaves de API.

## Assets e entradas de referência

- Asset do repositório: `Guia_de_estilo_Carparts.pdf`, versão 1.0 de 18/09/2026.
- Asset no Opal: `Guia de estilo Carparts`.
- Entradas fixas: `rel-001`, `rel-002` e `rel-003`, copiadas em `docs/opal/entradas-referencia.md`.
- Conjunto dourado automatizado: `eval/golden.jsonl`, casos `rel-001` a `rel-012`.
- Evidências da publicação e dos testes: [`evidencias.md`](evidencias.md).

## Critérios de aceite

As três entradas devem executar sem erro; hashes, merges e termos proibidos não podem aparecer; caso ambíguo deve ir para “Itens para revisão do tech lead”; saídas devem respeitar categorias, ordem e limite de 20 palavras.

## Inventário e governança

| Item | Valor |
|---|---|
| Ambiente | Google Opal (experimento) |
| Estado | Publicado e compartilhado por link |
| Papel na esteira | Protótipo e apoio, nunca produção direta |
| Prompt promovido | `prompts/release-notes.v3.md` |
| Implementação | `src/release-notes.mjs` |
| Quality gate | `.github/workflows/ci.yml`, mínimo 90% |
| Responsável pela aprovação | Tech lead/engenharia Carparts |
