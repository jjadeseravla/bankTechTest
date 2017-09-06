/* jshint esversion: 6 */

describe("Bank", () => {
  var bank;

  beforeEach(function(){
    bank = new Bank();
  });

  it('has a default balance of 0', () => {
    expect(bank.balance).toEqual(0);
  });

  it('can have money deposited into bank account', () => {
    bank.moneyTransaction(100)
    expect(bank.balance).toEqual(100);
  });

  it('can have money taken out of bank account', () => {
    bank.moneyTransaction(100)
    bank.moneyTransaction(-30)
    expect(bank.balance).toEqual(70);
  });

  it('should throw error string if insufficient funds', () => {
    expect(function(){bank.moneyTransaction(-10)}).toThrow('insufficient funds');
  });

  it('should not allow you to take out more money than you have', () => {
    bank.moneyTransaction(5)
    expect(function(){bank.moneyTransaction(-10)}).toThrow('insufficient funds');
  });

});
