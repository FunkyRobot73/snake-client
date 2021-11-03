const net = require("net");
const { IP, PORT } = require("./constants");

let connection;

const connect = function () {
  const name = 'Carlos 🐷:';
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`${name} is connected! 🔥`);
    conn.write(`Name: CAR`);
    
    // setTimeout(() => {
    //   //conn.write(`Move: right`);
    // }, 100);

    // setInterval(() => {
    //  // conn.write(`Move: up`);
    // }, 50);

    
  });

  conn.on("ready", () => {
    
    console.log(`${name} is Ready! ✅`);
  });
  
  conn.on("data", () => {
    
    console.log(`${name} has idled out! 💤`);
  });

  conn.on("close", () => {
    
    console.log(`${name} you have exited the game. 🏁`);
  });
  
  
  return conn;
};

module.exports = {connect};
