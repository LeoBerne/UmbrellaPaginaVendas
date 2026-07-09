#!/usr/bin/env node
/**
 * build-catalogo.mjs — Lê catalogo.json e gera assets/catalogo.js
 * com as constantes consumidas pelo index.html.
 *
 * Uso:  node build-catalogo.mjs
 * Saída: assets/catalogo.js
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CATALOGO_PATH = join(__dirname, "..", "catalogo", "catalogo.json");
const OUTPUT_PATH = join(__dirname, "assets", "catalogo.js");

const catalogo = JSON.parse(readFileSync(CATALOGO_PATH, "utf-8"));

function fmtPreco(p) {
  const s = p.setup;
  const m = p.mensalidade;
  if (s.min === 0) {
    return m.min === m.max ? `R$ ${m.min}/mês` : `R$ ${m.min}–${m.max}/mês`;
  }
  const setup = s.min === s.max
    ? `R$ ${s.min.toLocaleString("pt-BR")}`
    : `a partir de R$ ${s.min.toLocaleString("pt-BR")}`;
  const mensal = `R$ ${m.min}/mês`;
  return `Setup ${setup} + ${mensal}`;
}

// Ordem da escada de upsell
const ORDEM_UPSELL = ["site-bot", "recepcionista-ia", "agendamento", "painel-dono", "cobranca"];

const produtos = ORDEM_UPSELL.map(id => {
  const p = catalogo.produtos.find(prod => prod.id === id);
  if (!p) throw new Error(`Produto não encontrado: ${id}`);
  return {
    id: p.id,
    nome: p.nome,
    tagline: p.tagline,
    preco_display: fmtPreco(p.preco),
    setup_min: p.preco.setup.min,
    setup_max: p.preco.setup.max,
    mensalidade_min: p.preco.mensalidade.min,
    mensalidade_max: p.preco.mensalidade.max,
    mensagem_cta: p.mensagem_cta_site,
    sla: p.sla_go_live,
    verticais: p.verticais
  };
});

const planos = catalogo.planos_manutencao;

const output = `// Auto-gerado por build-catalogo.mjs — NÃO EDITAR MANUALMENTE
// Fonte: catalogo/catalogo.json v${catalogo.versao}
// Gerado em: ${new Date().toISOString()}

const WHATSAPP_NUMBER = '${catalogo.whatsapp_oficial}';

const CATALOGO_PRODUTOS = ${JSON.stringify(produtos, null, 2)};

const PLANOS_MANUTENCAO = ${JSON.stringify(planos, null, 2)};

// Helper: encontrar produto por ID
function getProduto(id) {
  return CATALOGO_PRODUTOS.find(p => p.id === id);
}
`;

writeFileSync(OUTPUT_PATH, output, "utf-8");
console.log(`Gerado: ${OUTPUT_PATH}`);
console.log(`Produtos: ${produtos.length}`);
console.log(`WhatsApp: ${catalogo.whatsapp_oficial}`);
