import Transaction from "./transaction.js";

export default class TransactionList {
    #transactions = [];

    constructor(transactions) {
        for (let transactionJSON of transactions) {
            let t = Transaction.fromJSON(transactionJSON);
            this.#transactions.push(t);
        }
    }

    get average() {
        let sum = 0;
        for (let transaction of this.#transactions) {
            sum += transaction.amount;
        }
        return sum / this.#transactions.length;
    }

    get min() {
        let min = this.#transactions[0].amount;
        for (let transaction of this.#transactions) {
            if (transaction.amount < min) {
                min = transaction.amount;
            }
        }
        return min;
    }

    get max() {
        let max = this.#transactions[0].amount;
        for (let transaction of this.#transactions) {
            if (transaction.amount > max) {
                max = transaction.amount;
            }
        }
        return max;
    }

    forEach(callback) { this.#transactions.forEach(callback); }
}
