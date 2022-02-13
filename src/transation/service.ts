import { Notification, Transaction, TypeTransaction } from '../interfaces';
import TelegramService from '../robots/telegram/service';
import { TransactionModel } from './schema';
import { TransactionMapper } from './mapper';

export class TransactionService {
    async saveTransaction(data: Notification) {
        const mapper = new TransactionMapper(data.application).build();
        const test = mapper.map(data);
        console.log(test)
        const transaction: Transaction = await new TransactionModel(test).save();
        const template = this.buildTemplateToTelegram(transaction);
        TelegramService.sendMessage(template);
        return transaction;
    }

    buildTemplateToTelegram(data: Transaction) {
        let summary = '';
        let conclusion = '';
    
        if(data.type === TypeTransaction.OUTPUT) {
            summary = 'Voce gastou';
            conclusion = '\n\n Se voce nao gastar o desconto é maior!!!! 😠'
        } else {
            summary = 'Voce recebeu';
            conclusion = '\n\n Cuide bem do seu dinheiro!!!! 🤑'
        }
    
        return `${summary} $${data.value} no local ${data.source} com o cartao ${data.provider} \n ${conclusion}`
    }
}