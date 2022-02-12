"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
var TOKEN = '5115885268:AAFtZrtEr5jw6a0f2263yXs8VrMyXJ29xQE';
var TelegramService = /** @class */ (function () {
    function TelegramService() {
    }
    TelegramService.prototype.sendMessage = function (data) {
        var bot = new node_telegram_bot_api_1.default(TOKEN, { polling: true });
        bot.on('message', function (msg) {
            var chatId = msg.chat.id;
            bot.sendMessage(chatId, 'Received your message' + data);
        });
    };
    return TelegramService;
}());
exports.default = new TelegramService();
