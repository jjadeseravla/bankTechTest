class Bank {
  constructor(balance, log){
    this.balance = 0;
    this.log = [];
  }

  moneyTransaction(money) {
    if (-money > this.balance) throw('insufficient funds')
    this.balance += money
  }
}



//  make a statement class with this.header = 'date || money 'etc
