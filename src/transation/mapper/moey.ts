import { Notification, Transaction, TypeTransaction } from "../../interfaces";

export function map(notification: Notification): any {
    console.log('moey mapper init');
    return {
        provider: 'moey',
        source: 'test',
        type: TypeTransaction.INPUT,   
        value: 1,
    };
}

