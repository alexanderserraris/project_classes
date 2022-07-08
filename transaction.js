class Transaction {
    constructor(amount, counterparty) {
        this.amount = parseInt(amount, 10);
        this.counterparty = counterparty;
    }

    toString() {
        return `Transactie(bedrag: ${this.amount} €, tegenpartij: ${this.counterparty})`;
    }
}

let transactions = [];

function createTransaction() {
    let amount = document.getElementById("amount").value;
    let counterparty = document.getElementById("counterparty").value;

    let transaction = new Transaction(amount, counterparty);
    console.log(`Nieuwe ${transaction.toString()}`);

    transactions.push(transaction);
    let transactionStrList = transactions.map(t => t.toString());
    console.log("ALLE TRANSACTIES", transactionStrList);
}

