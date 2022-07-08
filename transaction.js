class Transaction {
    constructor(amount, counterParty) {
        this.amount = amount;
        this.counterParty = counterParty;
    }
}

let transaction = new Transaction(50, 'John Doe');
let transactionStr = JSON.stringify(transaction);

console.log(transactionStr);
