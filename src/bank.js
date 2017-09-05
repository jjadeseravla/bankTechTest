class Bank {
  constructor(balance, log){
    this.balance = 0;
    this.log = 0;
  }

  money_transaction(money) {
    if (this.balance < 0) { return 'insufficient funds'}
    this.balance += money
  }
}


//  make a statement class with this.header = 'date || money 'etc
