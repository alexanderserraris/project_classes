function bindData(html, data) {
    for (const [key, value] of Object.entries(data)) {
        let element = html.querySelector(`[data="${key}"]`);
        if (element) {
            element.innerText = value;
        }
    }
    return html;
}


function showTransactions() {
    let transactions = JSON.parse(localStorage.getItem('transactions'));

    let transactionList = document.getElementById('transaction-list');

    let card = document.querySelector('#transaction-card');
    for (let transaction of transactions) {
        let clone = card.content.cloneNode(true);
        let cloneWithData = bindData(clone, transaction);
        transactionList.appendChild(cloneWithData);
    }
}

showTransactions();
