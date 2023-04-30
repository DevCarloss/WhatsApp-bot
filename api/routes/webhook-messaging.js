const { twiml } = require('twilio');
const client = require('../../twilio') // Importar Twilio
const MessagingResponse = require('twilio').twiml.MessagingResponse; // Importar Twilio Messaging Response

// URL do Webhook Para Receber Mensagens
const url = 'http://localhost:3000/webhooks/twilio/messaging'

// Função para enviar mensagem
var state = "iniciando conversa"

async function webhooks_twilio_messaging(req,res) {
    const twiml = new MessagingResponse();
    const incomingMessage = req.body.Body.toLowerCase(); // Mensagem Recebida
    if(state === "iniciando conversa"){
        await twiml.message('Olá! Eu Sou Carlos' + '\n' + '*Desenvolvedor de Software Júnior Freelancer*' + '\n' + "Escolha uma das Opções Abaixo:" + '\n' + '\n' + '1 - *Fazer Orçamento*' + '\n' + '2 - *Portfólio*' + '\n' + '3 - *Encerrar Atendimento*'); // Enviar Mensagem de Boas Vindas
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
        state = "enviando mensagem"
    }
    else if(state == "enviando mensagem"){
        let valores = {
            "1"(){
                twiml.message('Para fazer um orçamento, Acesse:' + '\n' + 'https://formulario-devcarloss.netlify.app' + '\n' + 'Preencha o formulário e aguarde o retorno que será enviado para o seu email');
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
                state = "iniciando conversa"
            },
            "2"(){
                twiml.message('Para visualizar meu portfólio, Acesse:' + '\n' + 'https://github.com/DevCarloss');
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
                state = "iniciando conversa"
            },
            "3"(){
                twiml.message('Atendimento Encerrado!' + '\n' + 'Caso queira iniciar um novo atendimento, envie uma mensagem para este número novamente');
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
                state = "iniciando conversa"
            }
        }
        valores[incomingMessage]()
    }
}

// Exportar Função
module.exports = webhooks_twilio_messaging