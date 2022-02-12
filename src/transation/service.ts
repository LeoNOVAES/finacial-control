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

const Providers = [
    "n26",
    "curve",
    "moey"
]

export class TransactionService {

    saveTransaction(data: any) {
        const transaction: Transaction = this.buildTransactionData(data);
        TelegramService.sendMessage(JSON.stringify(transaction));
        
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