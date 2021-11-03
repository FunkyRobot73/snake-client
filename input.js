const net = require("net");
let connection;

const handleUserInput = function (keyStroke) {
  // your code here
  
  if (keyStroke === '\u0003') {
    process.exit();
  }
  if (keyStroke === 'w') {
    //process.exit();
    connection.write(`Move: up`);
  }
  if (keyStroke === 'a') {
    //process.exit();
    connection.write(`Move: left`);
  }
  if (keyStroke === 's') {
    //process.exit();
    connection.write(`Move: down`);
  }
  if (keyStroke === 'd') {
    //process.exit();
    connection.write(`Move: right`);
  }

  if (keyStroke === 'p') {
    //process.exit();
    connection.write(`Say: Chomp`);
  }

  if (keyStroke === 'o') {
    //process.exit();
    connection.write(`Say: Burp!`);
  }

  if (keyStroke === 'i') {
    //process.exit();
    connection.write(`Say: Boom!`);
  }

};


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};
