"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
var interfaces_1 = require("../interfaces");
var service_1 = __importDefault(require("../robots/telegram/service"));
var mapper_1 = require("./mapper");
var TransactionService = /** @class */ (function () {
    function TransactionService() {
    }
    TransactionService.prototype.saveTransaction = function (data) {
        var mapper = new mapper_1.TransactionMapper(data.application).build();
        var transaction = mapper.map(data);
        var template = this.buildTemplateToTelegram(transaction);
        service_1.default.sendMessage(template);
        return transaction;
    };
    TransactionService.prototype.buildTemplateToTelegram = function (data) {
        var summary = '';
        var conclusion = '';
        if (data.type === interfaces_1.TypeTransaction.OUTPUT) {
            summary = 'Voce gastou';
            conclusion = '\n\n Se voce nao gastar o desconto é maior!!!! 😠';
        }
        else {
            summary = 'Voce recebeu';
            conclusion = '\n\n Cuide bem do seu dinheiro!!!! 🤑';
        }
        return "".concat(summary, " $").concat(data.value, " no local ").concat(data.source, " com o cartao ").concat(data.provider, " \n ").concat(conclusion);
    };
    return TransactionService;
}());
exports.TransactionService = TransactionService;
