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

let transactions = [];

function createTransaction() {
    let amount = document.getElementById("amount").value;
    let sender = document.getElementById("sender").value;
    let receiver = document.getElementById("receiver").value;

    let transaction = new Transaction(amount, sender, receiver);
    transaction.print();
    document.querySelector("form").reset();
}

