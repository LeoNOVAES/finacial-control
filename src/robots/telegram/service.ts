import TelegramBot from 'node-telegram-bot-api';
import config from '../../config/config';
// const TOKEN = '5115885268:AAFtZrtEr5jw6a0f2263yXs8VrMyXJ29xQE';

class TelegramService {
    public sendMessage(template: string): void {
        const bot = new TelegramBot(config.TELEGRAM_TOKEN, {polling: true});
        const idTelegram = config.TELEGRAM_ID;

        bot.sendMessage(
            idTelegram, 
            template
        );
    }
}

export default new TelegramService();