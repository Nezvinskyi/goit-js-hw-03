// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let id=0;
   
const account = {
//   // Текущий баланс счета
  balance: 0,

  // // История транзакций
  transactions: [],

  // /*
  //  * Метод создает и возвращает объект транзакции.
  //  * Принимает сумму и тип транзакции.
  //  */
  // createTransaction(amount, type) { },
  
  createTransaction(amount, type) {
 
    id += 1;
    return { id, amount, type }
},


  // /*
  //  * Метод отвечающий за добавление суммы к балансу.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций
  //  */
  deposit(amount) {
    // this.createTransaction(amount, 'deposit');
    this.balance += amount;
    // console.log('this.balance :>> ', this.balance);
    this.transactions.push(this.createTransaction(amount, 'deposit'));
    return this.transactions
},

  // /*
  //  * Метод отвечающий за снятие суммы с баланса.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций.
  //  *
  //  * Если amount больше чем текущий баланс, выводи сообщение
  //  * о том, что снятие такой суммы не возможно, недостаточно средств.
  //  */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств');
    } else {
      // this.createTransaction(amount, 'withdraw');
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
      return this.transactions
    }
  },

  // /*
  //  * Метод возвращает текущий баланс
  //  */
  getBalance() {
    return `The balance is: ${this.balance}`
  },

  // /*
  //  * Метод ищет и возвращает объект транзации по id
  //  */
  getTransactionDetails(id) {
    return this.transactions[id-1]
  },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
  getTransactionTotal(type) {
    let total = 0;
    console.log(this.transactions);
    for (const transaction of this.transactions) {
      if (transaction['type'] === type) {
       total+=transaction['amount'];
     }
      
    }
    return total
  },
};

// console.log(createTransaction(100, 'deposit')); 
// console.log(account.createTransaction(100, 'deposit'));
console.log(account.deposit(110));
console.log(account.deposit(200));
console.log(account.withdraw(250));
console.log(account.withdraw(22));
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
