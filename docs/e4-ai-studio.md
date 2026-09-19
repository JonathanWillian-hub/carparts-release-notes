# E4 · Ponte para o Google AI Studio

## Configuração reproduzível

- Área: Chat (playground)
- System instructions: conteúdo de `prompts/release-notes.v3.md`
- Mensagem variável: bloco de commits fictícios
- Modelo: estratégia Flash-first, configurado por `GEMINI_MODEL`
- Temperatura: `0.2`
- Structured output: ativo com o schema exportado por `RESPONSE_SCHEMA` em `src/release-notes.mjs`
- Get code: JavaScript, adaptado para Node.js 22 em `src/release-notes.mjs`
- Segredo: `GEMINI_API_KEY`, ausente do Git e listado apenas vazio em `.env.example`

## Comparação Opal × código promovido

| Caso | Resultado esperado no Opal | Resultado exigido pelo gate |
|---|---|---|
| rel-001 | Quatro categorias; dependência, merge, teste e docs ignorados | Funcionalidade, correção e segurança presentes; hashes ausentes |
| rel-002 | Correção e segurança; configuração de CI ignorada | Nota fiscal e sessão descritas sem hashes |
| rel-003 | Linhas vagas separadas para revisão | `Revisar`, funcionalidade e segurança presentes |

O código valida o JSON antes do consumo e falha se houver tipo desconhecido, resumo acima de 20 palavras ou hash exposto. A execução real usa a Gemini API somente quando `EVAL_PROVIDER=gemini`; o CI padrão usa fixture determinística para não gastar chamadas em toda alteração.
