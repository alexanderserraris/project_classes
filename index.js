import Template from "./util/templater.js";
import TransactionList from "./models/transactionslist.js";



const transactions = new TransactionList(JSON.parse(localStorage.getItem('transactions')));

// let statistics = new Template("statistics-table");
// statistics.render({
//     min: transactions.min,
//     max: transactions.max,
//     average: transactions.average,
// });

transactions.forEach(t => {
    let template = new Template('transaction-card');
    template.render(t);
});
