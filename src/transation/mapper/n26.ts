import { Notification, Transaction, TypeTransaction } from "../../interfaces";

export function map(notification: Notification): Transaction {
    console.log('n26 mapper init');
    const { message } = notification;
    const splitedMessage = message.split('of');
    const value = message.replace( /^\D+/g, '');

    const source = message.split('to')[1].split(' ')[2] === 'has' 
        ? message.split('to')[1].split(' ')[1]
        : `${message.split('to')[1].split(' ')[1]} ${message.split('to')[1].split(' ')[2]}`

    const type: TypeTransaction = splitedMessage[0].trim().toLowerCase() == 'your payment' 
        || splitedMessage[0].trim().toLowerCase() == 'your withdrawal' 
        ? TypeTransaction.OUTPUT 
        : TypeTransaction.INPUT;
    
    return {
        provider: notification.application,
        source,
        type,   
        value: parseFloat(value),
    };
}