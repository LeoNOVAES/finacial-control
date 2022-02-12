"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var TransactionController = /** @class */ (function () {
    function TransactionController() {
    }
    TransactionController.prototype.create = function (req, res) {
        var service = new service_1.TransactionService();
        var data = req.body;
        var transaction = service.saveTransaction(data);
        return res.status(201).json(data);
    };
    return TransactionController;
}());
exports.default = new TransactionController();
