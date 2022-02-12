"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var TransactionController = /** @class */ (function () {
    function TransactionController() {
    }
    TransactionController.prototype.create = function (req, res) {
        try {
            var service = new service_1.TransactionService();
            var data = req.body;
            var transaction = service.saveTransaction(data);
            return res.status(201).json(transaction);
        }
        catch (error) {
            return res.status(error.status || 500).json({ status: 'down', message: error.message });
        }
    };
    return TransactionController;
}());
exports.default = new TransactionController();
