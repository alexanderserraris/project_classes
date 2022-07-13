import Transaction from "./models/transaction.js";

function createTransaction() {
    let amount = document.getElementById("amount").value;
    let sender = document.getElementById("sender").value;
    let receiver = document.getElementById("receiver").value;

    let transaction = new Transaction(amount, sender, receiver);
    transaction.print();
    document.querySelector("form").reset();
    // document.getElementById('notification').innerText = "Transactie gemaakt!";
    document.getElementById('notification').classList.remove('invisible');
}

let createTransactionButton = document.getElementById("createTransaction");
createTransactionButton.addEventListener("click", createTransaction);
