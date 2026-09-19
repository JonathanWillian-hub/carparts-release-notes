# Evidências E2 · Google Opal — Release Notes Carparts

## Publicação

- **Mini-app:** Release Notes Carparts
- **URL pública:** https://opal.google/app/1ssE1RQlwtGwnoK6jhpGNkd7Nx6sGuEpZ
- **Publicado em:** 19/09/2026 às 01:40 (BRT)
- **Acesso:** qualquer pessoa com o link pode visualizar e executar.
- **Editor e remix:** desativados para visitantes.
- **Status observado no Opal:** `Your Opal is up-to-date. Everyone with your shared link sees your latest changes.`

## Fluxo publicado

1. **Commit List** — entrada multilinha no formato `hash mensagem`.
2. **Categorize Commits** — classifica em Nova funcionalidade, Correção, Segurança, Interna ou Revisar.
3. **Redigir Release Notes** — converte a classificação em texto profissional para clientes de montadoras.
4. **Release Notes** — página web responsiva em azul-escuro e cinza.
5. **Guia de estilo Carparts** — asset textual com linguagem, privacidade e critérios editoriais.

A página final contém o botão **Salvar no Google Docs**.

## Execuções manuais de referência

| Caso | Resultado observado | Situação |
|---|---|---|
| `rel-001` | Gerou Nova funcionalidade, Correção e Segurança; reconheceu PDF, catálogo e mitigação de arquivo perigoso. | Aprovado |
| `rel-002` | Gerou somente Correção e Segurança; reconheceu nota fiscal e validação de sessão. | Aprovado |
| `rel-003` | Gerou Nova funcionalidade para o filtro por montadora e encaminhou `wip` e `ajustes` para Itens para revisão do tech lead. | Aprovado |

## Verificações de aceite

- As três entradas foram processadas sem erro.
- Os hashes originais fornecidos não apareceram nas notas destinadas ao cliente.
- Seções vazias foram omitidas.
- O caso ambíguo foi separado para revisão humana.
- O botão **Salvar no Google Docs** apareceu na página final.
- Durante a QA, identificadores sintéticos iniciados por `#` foram detectados em uma saída intermediária. As etapas de redação e renderização foram corrigidas para remover hashes, IDs, tickets, códigos e badges, e a correção foi republicada às 01:40.
- O app utiliza somente dados fictícios ou públicos.

## Rastreabilidade

- Entradas: [`entradas-referencia.md`](entradas-referencia.md)
- Ficha e governança: [`release-notes.md`](release-notes.md)
- Prompt promovido: [`../../prompts/release-notes.v3.md`](../../prompts/release-notes.v3.md)
- Conjunto dourado: [`../../eval/golden.jsonl`](../../eval/golden.jsonl)
