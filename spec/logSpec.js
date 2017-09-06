/* jshint esversion: 6 */

describe("Log", () => {
  var bank;

  beforeEach(function(){
    log = new Log();
  });

  it ('should show you the transactions of your log', () => {
    expect(log.date).toEqual(Wed Sep 06 2017 13:53:25 GMT+0100 (BST))
    // console.log(log.date);
      // (var now = new Date()).toEqual
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");)
    // (const time = new Date());
  });
});
