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

let t1 = new Transaction(50, 'John Doe', 'Jane Doe');
let t2 = new Transaction(100, 'Mohad Hansen', 'Kamal Khan');

t1.print();
t2.print();
