export interface Transaction {
    provider: Providers,
    source?: string,
    value: number,
    type: TypeTransaction
}

export interface Notification {
    title: string,
    application: Providers,
    receveidAt: string,
    message: string
}

export enum TypeTransaction {
    OUTPUT = "OUTPUT",
    INPUT = "INPUT"
}

export enum Providers {
    N26 = "n26",
    CURVE = "curve",
    MOEY = "moey",
    COVERFLEX = "coverflex"
}