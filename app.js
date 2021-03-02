const cron = require("node-cron");
let shell = require("shelljs");

// At 12:00 on Sunday, Tuesday, and Thursday.
cron.schedule("00 12 * * 7,2,4", () => {
  console.log("running");
  if (shell.exec("node book.js").code !== 0) {
      console.log('Something went wrong');
  }
});
