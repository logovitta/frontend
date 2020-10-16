// //control structures

// //if else

var name = "kittens";
if (name == "puppies") {
  name += " woof";
} else if (name == "kittens") {
  name += " meow";
} else {
  name += "!";
}

console.log(name);

// //white do-while

//for
for (var i = 0; i < 5; i++) {
  // Will execute 5 times
  console.log(i);
}

// //for...of -> ARRAY
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  // do something with value
  console.log(value);
}

// //for...in -> OBJECT

const oggetto = {
  prova: 123,
  tipo: "ogetto",
  valore: null,
};

for (let proprieta in oggetto) {
  // do something with object property
  console.log(proprieta + ":" + oggetto[proprieta]);
}


// //&& e ||  ; AND o OR

// //ternary operator
var eta=17
console.log((eta>=18)?'maggiorenne':'minorenne')

//SWITCH
// switch (action) {
//     case 'draw':
//       drawIt();
//       break;
//     case 'eat':
//       eatIt();
//       break;
//     default:
//       doNothing();
//   }

