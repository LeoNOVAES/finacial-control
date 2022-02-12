import TelegramBot from 'node-telegram-bot-api';
import { Notification } from '../../interfaces';

const TOKEN = '5115885268:AAFtZrtEr5jw6a0f2263yXs8VrMyXJ29xQE';

class TelegramService {
    public sendMessage(template: string): void {
        const bot = new TelegramBot(TOKEN, {polling: true});
        const idsChat = this.getIdChat();

        idsChat.map((id) => {
            bot.sendMessage(
                id, 
                template
            );
        });
    }

    private getIdChat() {
        return [-777295501]
    }
}

export default new TelegramService();