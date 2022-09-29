// The client you build today will connect to a game server that is run by Lighthouse. The server holds all the logic for the rules of the game and also draws the game board. You can see the game board on a live video stream and eventually you will see you and your classmates' snakes on it!
const net = require("net")

// to connect with server
const connect = require("./client")

// to connect with input functions
const setupInput = require("./input")

// establishing a connection with the game server (host & port num in Discord)

console.log("Connecting...");
setupInput(connect());




