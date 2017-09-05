class Bank {
  constructor(balance, log){
    this.balance = 0;
    this.log = 0;
  }

  money_deposited(money) {
    this.balance += money
  }
}


//  make a statement class with this.header = 'date || money 'etc
