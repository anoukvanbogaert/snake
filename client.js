const net = require("net")
const {IP,PORT} = require("./constants")
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect",(client) => {
    console.log("Name: AVB");
    conn.write("Name: AVB");
    conn.write("Say: Yay")
    // conn.write("Move: up");
  })

  // interpret incoming data as a text
  conn.setEncoding("utf8");

  conn.on("data",(data) => {
    console.log('client says',data)
  });
  return conn
};

module.exports = connect


// process.stdin.on('keypress',(key) => {
//   if (key === 'b') {
//     process.stdout.write('\x07')
//   }
// });