import Transaction from "./models/transaction.js";

let transactions = JSON.parse(localStorage.getItem("transactions"));
if (transactions === null) {
    transactions = [];
}
console.log(transactions);

function createTransaction() {
    let amount = document.getElementById("amount").value;
    let sender = document.getElementById("sender").value;
    let receiver = document.getElementById("receiver").value;

    let transaction = new Transaction(amount, sender, receiver);
    transaction.print();
    document.querySelector("form").reset();

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

let createTransactionButton = document.getElementById("createTransaction");
createTransactionButton.addEventListener("click", createTransaction);
