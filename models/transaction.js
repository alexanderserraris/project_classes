export default class Transaction {
    constructor(amount, sender, receiver) {
        this.amount = amount;
        this.sender = sender;
        this.receiver = receiver;
    }

    static fromJSON(json) {
        return new Transaction(parseFloat(json.amount), json.sender, json.receiver);
    }

    print() {
        console.log(`${this.sender} sent ${this.amount} bits to ${this.receiver}`);
    }
}



