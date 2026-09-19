# Plano de entrega SAP1-DEVOPS

## E1 — Mapa de oportunidades

O mapa avalia seis tarefas e classifica cada uma conforme valor, risco de dados e custo. A evidência é `docs/e1-mapa-oportunidades.md`, com priorização, ganho estimado, mitigação e decisões explícitas de não usar IA.

## E2 — Opal publicada

O mini-app recebe mensagens fictícias, passa por dois Generate referenciados com `@`, aplica o guia de estilo como asset e entrega página e Google Docs. Serão anexados link publicado e prints do editor e das três execuções.

## E3 — Ficha técnica e governança

A ficha `docs/opal/release-notes.md` documenta dono, finalidade, passos, modelo, permissões, política de dados, asset, entradas, critérios de aceite, revisão mensal e relação com prompt, implementação e quality gate versionados.

## E4 — Ponte para AI Studio

O prompt refinado está em `prompts/`, o JSON Schema e a chamada adaptada estão em `src/`, e a chave permanece fora do Git. A documentação compara Opal e implementação com as mesmas três entradas.

## E5 — Quality gate

GitHub Actions e Jenkins executam lint, testes, scan de segredos e doze casos dourados com limiar de 90%. Logs versionados comprovam aprovação e reprovação intencional; CODEOWNERS e filtros de caminhos elevam a rastreabilidade.

## E6 — Métricas, custo e evolução

O relatório mede tempo antes e depois, calcula redução percentual, estima custo mensal com margem e compara com o orçamento. O assistente comercial recebe critérios objetivos de promoção, pausa e retorno ao piloto.
