// Auto-gerado por build-catalogo.mjs — NÃO EDITAR MANUALMENTE
// Fonte: catalogo/catalogo.json v1.0.0
// Gerado em: 2026-07-09T03:26:34.214Z

const WHATSAPP_NUMBER = '558681129331';

const CATALOGO_PRODUTOS = [
  {
    "id": "site-bot",
    "nome": "Combo Site + Bot",
    "tagline": "Sua vitrine profissional com atendente IA embutida — o primeiro passo para automatizar.",
    "preco_display": "Setup a partir de R$ 2.000 + R$ 150/mês",
    "setup_min": 2000,
    "setup_max": 3500,
    "mensalidade_min": 150,
    "mensalidade_max": 250,
    "mensagem_cta": "Olá! Quero saber mais sobre o Combo Site + Bot para meu negócio.",
    "sla": "3 dias úteis",
    "verticais": [
      "clinicas",
      "servicos",
      "comercio",
      "profissionais_liberais"
    ]
  },
  {
    "id": "recepcionista-ia",
    "nome": "Recepcionista IA no WhatsApp",
    "tagline": "Sua recepcionista 24h no WhatsApp — responde, qualifica e agenda sem você precisar estar online.",
    "preco_display": "Setup a partir de R$ 2.500 + R$ 300/mês",
    "setup_min": 2500,
    "setup_max": 3500,
    "mensalidade_min": 300,
    "mensalidade_max": 500,
    "mensagem_cta": "Olá! Vi o Recepcionista IA no site e quero saber mais.",
    "sla": "1 dia útil",
    "verticais": [
      "clinicas"
    ]
  },
  {
    "id": "agendamento",
    "nome": "Agente de Agendamento",
    "tagline": "Agenda integrada ao Google Calendar — o paciente marca direto no WhatsApp, sem ligar.",
    "preco_display": "Setup a partir de R$ 1.500 + R$ 200/mês",
    "setup_min": 1500,
    "setup_max": 2500,
    "mensalidade_min": 200,
    "mensalidade_max": 350,
    "mensagem_cta": "Olá! Quero saber mais sobre o Agente de Agendamento integrado ao Google Calendar.",
    "sla": "1 dia útil (requer Recepcionista IA ativo)",
    "verticais": [
      "clinicas"
    ]
  },
  {
    "id": "painel-dono",
    "nome": "Painel do Dono",
    "tagline": "Relatório semanal direto no seu WhatsApp — saiba o que aconteceu no negócio sem abrir nenhum sistema.",
    "preco_display": "R$ 197/mês",
    "setup_min": 0,
    "setup_max": 0,
    "mensalidade_min": 197,
    "mensalidade_max": 197,
    "mensagem_cta": "Olá! Quero saber mais sobre o Painel do Dono — relatório semanal no WhatsApp.",
    "sla": "1 dia útil (requer fonte de dados ativa)",
    "verticais": [
      "clinicas",
      "servicos",
      "comercio"
    ]
  },
  {
    "id": "cobranca",
    "nome": "Cobrança Automática",
    "tagline": "Régua de cobrança inteligente com Pix pronto — D-3, D0, D+3, D+7 no WhatsApp.",
    "preco_display": "Setup a partir de R$ 3.000 + R$ 400/mês",
    "setup_min": 3000,
    "setup_max": 4000,
    "mensalidade_min": 400,
    "mensalidade_max": 700,
    "mensagem_cta": "Olá! Quero saber mais sobre a Cobrança Automática com Pix no WhatsApp.",
    "sla": "5 dias úteis (inclui aprovação de templates Meta)",
    "verticais": [
      "clinicas",
      "servicos",
      "comercio"
    ]
  }
];

const PLANOS_MANUTENCAO = {
  "essencial": {
    "mensal": 300,
    "inclui": [
      "monitoramento",
      "correções"
    ]
  },
  "evolucao": {
    "mensal_min": 500,
    "mensal_max": 800,
    "inclui": [
      "essencial",
      "ajustes de prompt",
      "pequenas melhorias"
    ]
  }
};

// Helper: encontrar produto por ID
function getProduto(id) {
  return CATALOGO_PRODUTOS.find(p => p.id === id);
}
