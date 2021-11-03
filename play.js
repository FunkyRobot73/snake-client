// IP: 165.227.47.243
// Port: 50541

const net = require("net");
const name = 'Carlos 🐷:';

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`${name} is connected! 🔥`);
  });

  conn.on("ready", () => {
    
    console.log(`${name} is Ready! ✅`);
  });
  
  conn.on("data", () => {
    
    console.log(`${name} is idled out! 🗯️`);
  });

  return conn;
};


console.log("Connecting ...");
connect();
