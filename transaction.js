class Transaction {
    constructor(amount, sender, receiver) {
        this.amount = amount;
        this.sender = sender;
        this.receiver = receiver;
    }

    print() {
        console.log(`${this.sender} sent ${this.amount} bits to ${this.receiver}`);
    }
}

// let transactions = [];

// function createTransaction() {
//     let amount = document.getElementById("amount").value;
//     let counterparty = document.getElementById("counterparty").value;

//     let transaction = new Transaction(amount, counterparty);
//     console.log(`Nieuwe ${transaction.toString()}`);

//     transactions.push(transaction);
//     let transactionStrList = transactions.map(t => t.toString());
//     console.log("ALLE TRANSACTIES", transactionStrList);
// }

