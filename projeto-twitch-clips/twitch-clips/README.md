# Twitch Clips Monitor

Bot em Node.js para monitorar clipes da Twitch e enviar notificações para um canal do Discord via Webhook.

## Como usar no VS Code:
1. Extraia este arquivo ZIP em uma pasta no seu computador.
2. Abra o VS Code e vá em **File -> Open Folder** e escolha a pasta extraída.
3. Abra o terminal do VS Code e digite `npm install` para instalar as dependências.

## Como configurar no Render:
1. Suba esta pasta para o seu repositório do GitHub (sem a pasta `node_modules`).
2. No Render, configure as seguintes **Environment Variables**:
   - `WEBHOOK_URL`: O link do Webhook do seu Discord.
   - `TWITCH_CHANNEL`: O nome do canal da Twitch (ex: `subdark`).
