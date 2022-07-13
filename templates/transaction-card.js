import domUtils from "../util/util.js";

const transactionCard = {
    type: 'a',
    href: '#',
    class: 'list-group-item list-group-item-action',
};

const transactionHeaderDiv = {
    type: 'div',
    class: 'd-flex justify-content-left',
};

const transactionHeaderText = (innerText) => ({
    type: 'h3',
    class: 'mb-0',
    innerText: innerText,
});


const transactionArrowIcon = {
    type: 'i',
    class: 'fa fa-arrow-right',
};

const transactionLowerColDiv = {
    type: 'div',
    class: 'col',
};

const transactionLowerDiv = {
    type: 'div',
    class: 'row align-items-center',
};

const transactionLowerPElement = (innerText) => ({
    type: 'p',
    class: 'm-0',
    innerText: innerText,
});

export default function makeTransactionCard(transaction) {
    // header
    let headerDiv = domUtils.createElement(transactionHeaderDiv, [
        transactionHeaderText(transaction.amount),
        { type: 'small', class: 'text-muted', innerText: 'bits' },
    ]);

    // lower
    let senderCol = domUtils.createElement(transactionLowerColDiv, [transactionLowerPElement(transaction.sender)]);
    let arrowCol = domUtils.createElement(
        { type: 'div', class: 'col px-0 d-flex justify-content-center' },
        [transactionArrowIcon]);
    let receiverCol = domUtils.createElement(transactionLowerColDiv, [transactionLowerPElement(transaction.receiver)]);
    let lowerDiv = domUtils.createElement(transactionLowerDiv, [senderCol, arrowCol, receiverCol], false);

    let card = domUtils.createElement(transactionCard, [headerDiv, lowerDiv], false);
    return card;
}


