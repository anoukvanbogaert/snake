const net = require("net")
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

module.exports = connect