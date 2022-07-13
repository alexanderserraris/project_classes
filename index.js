import Template from "./util/templater.js";
import TransactionList from "./models/transactionslist.js";


function render() {
    const transactions = new TransactionList(JSON.parse(localStorage.getItem('transactions')));
    (new Template("statistics-table")).render({
        min: transactions.min,
        max: transactions.max,
        average: Math.round(transactions.average, 2),
    });

    transactions.forEach(t => {
        let template = new Template('transaction-card');
        template.render(t);
    });
}

render();
