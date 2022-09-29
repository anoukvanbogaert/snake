// to allow to listen for keyboard input and interact with it
let connection;

const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

// what happens when a particular key is pressed?
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up")
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down")
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
}

module.exports = setupInput

// process.stdin.on('keypress',(key) => {
//   if (key === 'b') {
//     process.stdout.write('\x07')
//   }
// });