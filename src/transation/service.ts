import TelegramService from '../robots/telegram/service';

interface Transaction {
    source: string,
    value: number,
    type: TypeTransaction
}

interface Notification {
    message: string
}

enum TypeTransaction {
    OUTPUT,
    INPUT
}

export class TransactionService {

    saveTransaction(data: any) {
        TelegramService.sendMessage(data);
    }

    private buildTransactionData (notification: Notification): Transaction {
        const transaction: Transaction = {
            source: '',
            value: 1,
            type: TypeTransaction.INPUT
        };

        return transaction;
    }
}