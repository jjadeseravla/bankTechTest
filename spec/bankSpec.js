/* jshint esversion: 6 */

describe("Bank", () => {
  var bank;

  beforeEach(function(){
    bank = new Bank();
  });

  it('has a default balance of 0', () => {
    expect(bank.balance).toEqual(0);
  });

});
