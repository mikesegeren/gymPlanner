const cron = require("node-cron");
let shell = require("shelljs");
console.log('running');
// At 12:00 on Sunday, Tuesday, and Thursday.
// 0 12 * * 7,2,4
cron.schedule("03 12 * * 7,3,4", () => {
  if (shell.exec("node book.js").code !== 0) {
      console.log('Something went wrong');
  }
});
