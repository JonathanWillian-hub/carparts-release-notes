import { readFile } from "node:fs/promises";

export const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    versao: { type: "STRING" },
    resumo: { type: "STRING" },
    itens: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          tipo: {
            type: "STRING",
            enum: ["Nova funcionalidade", "Correção", "Segurança", "Interna", "Revisar"]
          },
          resumo: { type: "STRING" },
          modulo: { type: "STRING" }
        },
        required: ["tipo", "resumo", "modulo"]
      }
    }
  },
  required: ["versao", "resumo", "itens"]
};

export function validarSaida(saida) {
  const tipos = new Set(["Nova funcionalidade", "Correção", "Segurança", "Interna", "Revisar"]);
  if (!saida || !Array.isArray(saida.itens)) throw new TypeError("Saída sem a lista itens.");
  for (const item of saida.itens) {
    if (!tipos.has(item.tipo)) throw new TypeError(`Tipo inválido: ${item.tipo}`);
    if (!item.resumo || item.resumo.trim().split(/\s+/).length > 20) {
      throw new TypeError("Resumo ausente ou acima de 20 palavras.");
    }
    if (/\b[0-9a-f]{7,40}\b/i.test(item.resumo)) throw new TypeError("Hash exposto na saída.");
  }
  return saida;
}

export async function gerarReleaseNotes(commits, options = {}) {
  const apiKey = options.apiKey ?? process.env.GEMINI_API_KEY;
  const model = options.model ?? process.env.GEMINI_MODEL ?? "gemini-2.5-flash";
  if (!apiKey) throw new Error("Defina GEMINI_API_KEY fora do Git antes de usar o provedor Gemini.");
  const prompt = options.prompt ?? await readFile("prompts/release-notes.v3.md", "utf8");
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: prompt }] },
      contents: [{ role: "user", parts: [{ text: commits }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA
      }
    })
  });
  if (!response.ok) throw new Error(`Gemini retornou HTTP ${response.status}.`);
  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("A Gemini API não retornou conteúdo.");
  return validarSaida(JSON.parse(text));
}
