const dotenv = require('dotenv').config() // Importar dotenv
// Twilio Credenciais
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken) // Importar Twilio

// Exportar Twilio
module.exports = client

// Funções da aplicação
const executar_servidor = require('./api/api') // Importar api.js
executar_servidor() // Executar Servidor
