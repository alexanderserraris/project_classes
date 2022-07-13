import makeTransactionCard from "./templates/transaction-card.js";

function showTransactions() {
    let transactions = JSON.parse(localStorage.getItem('transactions'));

    let transactionList = document.getElementById('transaction-list');
    let child = transactionList.lastElementChild;
    while (child) { // remove children of the current list
        transactionList.removeChild(child);
        child = transactionList.lastElementChild;
    }

    for (let transaction of transactions) {
        let transactionCard = makeTransactionCard(transaction);
        transactionList.appendChild(transactionCard);
    }
}

showTransactions();
