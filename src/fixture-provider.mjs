const ignored = /(merge|chore\(deps\)|bump|lockfile|\btest:|\bdocs:|\bci:|format|typo)/i;

function frase(tipo, texto) {
  const t = texto.toLowerCase();
  if (tipo === "Nova funcionalidade" && /pdf/.test(t)) return "Permite anexar documentos PDF na abertura do pedido.";
  if (tipo === "Nova funcionalidade" && /prazo/.test(t)) return "Exibe o prazo de entrega estimado por item na cotação.";
  if (tipo === "Nova funcionalidade" && /filtro/.test(t)) return "Adiciona filtro por montadora compatível no catálogo de peças.";
  if (tipo === "Nova funcionalidade" && /catalog/.test(t)) return "Adiciona busca por aplicação do veículo no catálogo de peças.";
  if (tipo === "Nova funcionalidade") return "Adiciona uma nova função ao portal de pedidos B2B.";
  if (tipo === "Correção" && /nota.fiscal|arredond/.test(t)) return "Corrige o arredondamento do valor total exibido na segunda via da nota fiscal.";
  if (tipo === "Correção" && /timeout/.test(t)) return "Corrige falha ao listar grande volume de pedidos.";
  if (tipo === "Correção" && /duplic/.test(t)) return "Corrige números de peça duplicados na busca por aplicação.";
  if (tipo === "Correção") return "Corrige uma falha percebida no portal de pedidos B2B.";
  if (tipo === "Segurança" && /upload|execut/.test(t)) return "Bloqueia arquivos potencialmente perigosos no portal de pedidos B2B.";
  if (tipo === "Segurança" && /sess/.test(t)) return "Reforça a validação de sessões expiradas no portal de pedidos B2B.";
  if (tipo === "Segurança") return "Reforça a proteção de credenciais e dados do portal de pedidos B2B.";
  if (tipo === "Interna") return "Melhora a organização interna dos serviços da Carparts.";
  return "Requer análise do tech lead antes da publicação.";
}

export function gerarFixture(input, id = "versao-teste") {
  const itens = [];
  for (const linha of input.split("\n").map((x) => x.trim()).filter(Boolean)) {
    if (ignored.test(linha)) continue;
    let tipo = "Revisar";
    if (/\bfeat(?:\(|:)/i.test(linha)) tipo = "Nova funcionalidade";
    else if (/\bfix(?:\(|:)/i.test(linha)) tipo = "Correção";
    else if (/\bsecurity(?:\(|:)/i.test(linha)) tipo = "Segurança";
    else if (/\brefactor(?:\(|:)/i.test(linha)) tipo = "Interna";
    const modulo = linha.match(/(?:feat|fix|security|refactor)\(([^)]+)\)/i)?.[1] ?? "geral";
    itens.push({ tipo, resumo: frase(tipo, linha), modulo });
  }
  return {
    versao: id,
    resumo: "Notas geradas a partir de mensagens fictícias e sujeitas à revisão da equipe de engenharia.",
    itens
  };
}
