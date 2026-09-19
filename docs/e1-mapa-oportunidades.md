# E1 · Mapa de oportunidades de IA

Classificação feita para o contexto Carparts, respeitando somente dados públicos ou fictícios, o teto de US$ 300/mês e a revisão humana obrigatória.

| Prioridade | Tarefa | Classificação | Valor e ganho estimado | Risco de dados e mitigação | Custo estimado |
|---|---|---|---|---|---|
| 1 | Redigir notas de versão a partir de commits | Opal → AI Studio → esteira | Reduz a redação de 6 h para cerca de 45 min por versão (87,5%); padroniza o texto | Médio; usar apenas commits fictícios/públicos, remover identificadores e exigir aprovação | US$ 1,80/mês |
| 2 | Explicar mudanças do portal em linguagem simples para o comercial | Só Opal (apoio) no piloto; promover se houver uso externo | Permite validar vocabulário em uma semana sem criar aplicação | Médio; proibir dados de clientes e manter respostas como rascunho interno | US$ 0 no Opal; até US$ 9/mês se promovido |
| 3 | Classificar chamados técnicos por tema | Opal → AI Studio → esteira somente com dados sintéticos | Pode reduzir triagem manual, mas exige integração e testes | Alto; chamados reais podem conter dados pessoais. Prototipar com conjunto anonimizado/fictício | US$ 12/mês após promoção |
| 4 | Gerar resumo diário do status público do pipeline | Só Opal (apoio) | Economiza cerca de 15 min/dia e facilita a reunião diária | Baixo; fornecer apenas estados e métricas sem segredos ou logs completos | US$ 0 no Opal |
| 5 | Aprovar automaticamente release para produção | Não usar IA | Nenhum ganho justifica remover o gate humano; decisão exige rastreabilidade determinística | Crítico; uma alucinação pode liberar versão incorreta | US$ 0; usar regra determinística no CI |
| 6 | Responder dúvidas usando dados de pedidos, preços ou ERP | Não usar IA no Opal | Valor comercial potencial, porém incompatível com a restrição atual | Crítico; dados comerciais e de clientes são proibidos no protótipo | Reavaliar somente com arquitetura aprovada |

## Priorização

A release note fica em primeiro lugar porque combina alto ganho, baixo volume de chamadas e risco controlável. O assistente comercial permanece no Opal até completar o piloto. A classificação de chamados só avança depois de anonimização e aprovação de governança. Aprovação de produção permanece determinística e humana.
