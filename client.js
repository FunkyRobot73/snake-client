const net = require("net");
//connect = required("connect");

const connect = function () {
  const name = 'Carlos 🐷:';
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`${name} is connected! 🔥`);
    conn.write(`Name: CAR`);
    
    setTimeout(() => {
      //conn.write(`Move: right`);
    }, 100);

    setInterval(() => {
     // conn.write(`Move: up`);
    }, 50);

    
  });

  conn.on("ready", () => {
    
    console.log(`${name} is Ready! ✅`);
  });
  
  conn.on("data", () => {
    
    console.log(`${name} is idled out! 🗯️`);
  });
  
  
  return conn;
};

module.exports = {connect};
