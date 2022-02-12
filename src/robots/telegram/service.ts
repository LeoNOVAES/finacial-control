import TelegramBot from 'node-telegram-bot-api';

const TOKEN = '5115885268:AAFtZrtEr5jw6a0f2263yXs8VrMyXJ29xQE';

class TelegramService {
    public sendMessage(data: any) {
        const bot = new TelegramBot(TOKEN, {polling: true});
        bot.on('message', (msg) => {
            const chatId = msg.chat.id;
            bot.sendMessage(chatId, 'Received your message' + data);
        });
    }
}

export default new TelegramService();