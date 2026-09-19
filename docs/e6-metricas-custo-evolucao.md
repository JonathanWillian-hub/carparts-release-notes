# E6 · Métricas, custo e evolução

## Tempo antes e depois

Medição piloto baseada em uma versão com cerca de dez commits.

| Etapa | Antes | Depois | Evidência/critério |
|---|---:|---:|---|
| Ler e classificar commits | 120 min | 10 min | Opal executa o primeiro Generate |
| Redigir e padronizar | 180 min | 5 min | Segundo Generate aplica o guia |
| Revisar com engenharia | 60 min | 25 min | Homologação humana obrigatória |
| Ajustar e publicar | 30 min | 5 min | Template estruturado |
| **Total por versão** | **390 min (6h30)** | **45 min** | **redução de 345 min / 88,5%** |

## Estimativa mensal

Hipóteses conservadoras: 8 versões/mês, 12 casos dourados por mudança de prompt, 2 mudanças/mês e custo médio estimado de US$ 0,00015 por avaliação curta.

| Uso | Cálculo | Estimativa |
|---|---|---:|
| Geração das releases | 8 × US$ 0,00015 | US$ 0,0012 |
| Avaliação do prompt | 2 × 12 × US$ 0,00015 | US$ 0,0036 |
| Margem por reexecuções (10×) | (0,0012 + 0,0036) × 10 | US$ 0,0480 |
| Assistente comercial promovido (cenário) | 60.000 interações × US$ 0,00015 | US$ 9,00 |
| **Total projetado** |  | **US$ 9,05/mês** |

O total usa apenas 3,02% do teto de US$ 300/mês. O pipeline registra o custo estimado por execução e o time revisa volume e preço mensalmente; preços reais do modelo devem ser atualizados antes da produção.

## Plano do assistente comercial

1. **Semanas 1–2 — continuar no Opal:** testar apenas perguntas fictícias, medir clareza, utilidade e taxa de respostas que exigem correção.
2. **Critério para promover:** ao menos 50 testes, ≥90% de respostas aprovadas, zero vazamento de termo proibido e estimativa mensal abaixo de US$ 60 (20% do orçamento).
3. **Semanas 3–4 — promover para código:** Structured output, autenticação, base aprovada, prompt versionado, testes e revisão por CODEOWNERS.
4. **Produção:** homologação, aprovação registrada e monitoramento. Pausar se aprovação cair abaixo de 90%, custo projetado passar de US$ 240 ou surgir dado não autorizado.
