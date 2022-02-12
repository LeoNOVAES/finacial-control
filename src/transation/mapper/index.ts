export class TransactionMapper {
    private provider: string;

    constructor(provider: string) {
        this.provider = provider;
    }

    public build() {
        try {
            return require(`./${this.provider}`);
        } catch (error) {
            throw new Error('provider doest exists');
        } 
    }
}