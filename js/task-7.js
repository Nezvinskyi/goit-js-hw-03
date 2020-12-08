
let id=0;
   
const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    id += 1;
    return { id, amount, type }
},

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, 'deposit'));
    return this.transactions
},

  withdraw(amount) {
    if (amount > this.balance) {
      return 'Cнятие такой суммы не возможно, недостаточно средств'
    } else {
      // this.createTransaction(amount, 'withdraw');
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
      return this.transactions
    }
  },

  getBalance() {
    return `The balance is: ${this.balance}`
  },

  getTransactionDetails(id) {
    console.log(`Transaction details (id: ${id})`);
    return this.transactions[id-1]
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction['type'] === type) {
       total+=transaction['amount'];
     }
    }
    return `Total turnover of "${type}" transactions: ${total}`
  },
};

// Проверка
console.log(account.deposit(110));
console.log(account.deposit(200));
console.log(account.withdraw(2500));
console.log(account.withdraw(250));
console.log(account.withdraw(22));
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
