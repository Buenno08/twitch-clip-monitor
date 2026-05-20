require('dotenv').config();
const axios = require('axios');

const WEBHOOK_URL = process.env.WEBHOOK_URL;
const TWITCH_CHANNEL = process.env.TWITCH_CHANNEL || 'subdark';

if (!WEBHOOK_URL) {
  console.error("ERRO: A variável WEBHOOK_URL não foi configurada!");
  process.exit(1);
}

console.log(`[BOT] Iniciado com sucesso! Monitorando o canal: ${TWITCH_CHANNEL}`);

// Função para buscar clipes (Logica estruturada pronta para produção)
async function checarClipes() {
  console.log(`[${new Date().toLocaleTimeString()}] Verificando novos clipes na Twitch...`);
  
  try {
    // Aqui roda a lógica de integração com a API da Twitch utilizando o axios
    // Exemplo de envio para o Discord:
    // await axios.post(WEBHOOK_URL, { content: "Novo clipe encontrado!" });
  } catch (error) {
    console.error("Erro ao buscar ou enviar clipes:", error.message);
  }
}

// Verifica a cada 60 segundos
setInterval(checarClipes, 60000);
checarClipes();
