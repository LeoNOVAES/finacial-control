import { Transaction, TypeTransaction } from '../interfaces';
import { Schema, model } from 'mongoose';

const schema = new Schema<Transaction>({
    provider: { type: String, required: true },
    source: { type: String, required: true },
    value: { type: Number, required: true },
    type: { type: String, enum: TypeTransaction ,default: TypeTransaction.OUTPUT  }
});

export const TransactionModel = model<Transaction>("Transaction", schema);
