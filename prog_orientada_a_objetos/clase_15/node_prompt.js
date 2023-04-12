const prompt = require("prompt-sync")({sigint: true});

var n1,n2;

n1 = parseInt(prompt(`Ingresa un numero: `));
n2 = parseInt(prompt(`Ingresa un numero: `));

console.log(`La suma es: ${n1+n2}`);