// Whatsapp Bot API 
const express = require('express'); // Importar Express
const app = express(); // Instanciar Express
const bodyParser = require('body-parser'); // Importar Body Parser
const cors = require('cors'); // Importar Cors

app.use(cors()); // Usar Cors
app.use(bodyParser.json()); // Usar Body Parser
app.use(bodyParser.urlencoded({ extended: true })); // Usar Body Parser

// Rotas
const webhooks_twilio_messaging = require('./routes/webhook-messaging'); // Importar Rotas
app.post('/webhooks/twilio/messaging', (req,res) => { // Rota para receber mensagens
    webhooks_twilio_messaging(req,res)
}); 

// Executar Servidor
function execute_server(){
    app.listen(300, () => {
        console.log('Servidor rodando na porta 300')
    })
}

// Exportar Função
module.exports = execute_server


