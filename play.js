// The client you build today will connect to a game server that is run by Lighthouse. The server holds all the logic for the rules of the game and also draws the game board. You can see the game board on a live video stream and eventually you will see you and your classmates' snakes on it!
const net = require("net")

// establishing a connection with the game server (host & port num in Discord)
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect",() => {

  })

  // interpret incoming data as a text
  conn.setEncoding("utf8");

  conn.on("data",(data) => {
    console.log('client says',data)
  });
};



console.log("Connecting...");
connect();



