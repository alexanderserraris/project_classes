export default class Transaction {
    constructor(amount, sender, receiver) {
        this.amount = amount;
        this.sender = sender;
        this.receiver = receiver;
    }

    print() {
        console.log(`${this.sender} sent ${this.amount} bits to ${this.receiver}`);
    }
}



