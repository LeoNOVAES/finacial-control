"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
var service_1 = __importDefault(require("../robots/telegram/service"));
var TypeTransaction;
(function (TypeTransaction) {
    TypeTransaction[TypeTransaction["OUTPUT"] = 0] = "OUTPUT";
    TypeTransaction[TypeTransaction["INPUT"] = 1] = "INPUT";
})(TypeTransaction || (TypeTransaction = {}));
var TransactionService = /** @class */ (function () {
    function TransactionService() {
    }
    TransactionService.prototype.saveTransaction = function (data) {
        service_1.default.sendMessage(data);
    };
    TransactionService.prototype.buildTransactionData = function (notification) {
        var transaction = {
            source: '',
            value: 1,
            type: TypeTransaction.INPUT
        };
        return transaction;
    };
    return TransactionService;
}());
exports.TransactionService = TransactionService;
