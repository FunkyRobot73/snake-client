// IP: 165.227.47.243
// Port: 50541

const {connect} = require("./client");

// **************  Setup stdin

const handleUserInput = function (keyStroke) {
  // your code here
  
  if (keyStroke === '\u0003') {
    process.exit();
  }

};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();








