class Bank {
  constructor(balance, log){
    this.balance = 0;
    this.log = 0;
  }

  moneyTransaction(money) {
    if (this.balance <= 0 && money < 0) throw('insufficient funds')
    this.balance += money
    console.log(this.balance);
  }
}



//  make a statement class with this.header = 'date || money 'etc
