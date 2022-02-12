import { Request, Response } from "express";
import { Notification, Transaction } from "../interfaces";
import { TransactionService } from "./service";

class TransactionController {
    create (req: Request, res: Response): Response {
        try {
            const service = new TransactionService();
            const data: Notification = req.body;
            const transaction: Transaction = service.saveTransaction(data);
            return res.status(201).json(transaction);
        } catch (error: any) {
            return res.status(error.status || 500).json({ status: 'down', message: error.message });
        }
    }
}

export default new TransactionController();
