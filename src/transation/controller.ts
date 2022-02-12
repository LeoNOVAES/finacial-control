import { TransactionService } from "./service";

class TransactionController {
    create (req: any, res: any) {
        const service = new TransactionService();
        const data = req.body;
        const transaction = service.saveTransaction(data);
        return res.status(201).json(data);
    }
}

export default new TransactionController();
