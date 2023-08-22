const process = require('process');
const [ , , ...name] = process.argv;

console.log('Welcome to Holberton School, what is your name? \n ${name} ');
