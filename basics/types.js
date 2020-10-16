// //THE TYPES

// // Number
// // String
// // Boolean
// // Symbol (new in ES2015)
// // Object
// // Function
// // Array
// // Date
// // RegExp
// // null
// // undefined

// //NUMBERS
// //double-precision 64-bit format IEEE 754 values
// //There's no such thing as an integer in JavaScript
console.log(3 / 2); // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1

// //Come convertire stringa in numero
console.log(parseInt("123", 10)); // 123
console.log('stringa')
console.log(parseInt("010", 10)); // 10

// //Il secondo valore è da specificare per i BROWSER, non per node. Specifica la base da usare per la conversione
console.log(+"42"); // 42
// //Convertire stringa float
console.log(parseFloat("1.24"));

// //NaN: Not a Number
console.log(parseInt("hello", 10)); // NaN
console.log(isNaN(NaN)); // true

// //STRINGS
// // they are sequences of UTF-16 code units - ottimo per i caratteri con accenti
console.log("hello".length); // 5
// //questo perchè le stringhe sono come degli oggetti o array
// //quindi possiamo effettuare tutte le operazione che useremmo anche per gli array
console.log("hello".charAt(0)); // "h"

// //OTHER TYPES
// //null - indica deliberatamente un non valore
// //undefined - indica una variabile non assegnata; se si crea una variabile senza assegnare valore il risultato sarà undefined
// //boolene: true & false ovvero truthy & falsy
// //false = false , 0 , "", NaN, null, undefined
// //true = tutto il resto
// //per controllare il valore booleano
console.log(Boolean(""));
console.log(Boolean(234));

// //VARIABLES
// //VAR LET CONST

// //LET - BLOCK LEVEL VARIABLES

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
  console.log(myLetVariable);
}
//console.log(myLetVariable);

// //CONST - VARIABLE NEVER TO CHANGE
const Pi = 3.14;
console.log(Pi);
//const Pi=1

// //VAR - MOST COMMON USED
for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable is visible to the whole function
  console.log(myVarVariable);
}

console.log(
  "la variabile può essere usata estenramente dal blocco e il valore è: " +
    myVarVariable
);
// // myVarVariable *is* visible out here
