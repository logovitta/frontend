// //FUNCTIONS

function add(x, y) {
  var total = x + y;
  return total;
}

console.log(add(1, 2)); //3

console.log(add()); //NaN

console.log(add(1, 2, 3)); //non mi prende il 3 perchè le variabili sono solo 2

// //variabile arguments inside function sono tutte le variabili passate

function avg() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

console.log(avg(2, 3, 4, 5)); // 3.5

// //REST parameter operator --> ...variable
function avg2(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

console.log(avg2(2, 3, 4, 5)); // 3.5

// //figo ma... avg2 prende in considerazione una lista di valori separati da virgola "2,3,4".... se io volessi passargli un array
console.log(avg2([2, 3, 4, 5]));//NaN
// //SPREAD OPERATOR <-----------------
console.log(avg2(...[2, 3, 4, 5]));//YAY...3.5


// //LE FUNZIONI POSSONO ANCHE ESSERE ANONIME
// //Noi chiamiamo le function + nome etc etc
// //Possiamo anche chiamarle con var prova = function.... assegandole così a una variabile
var prova = function(){return 5;}
console.log(prova());
// //o anche usarle in modalità self invoking
ex();
function ex(){
  console.log('esempio')
}


(function() {
    console.log('parto anche se non richiamata');
  })();


// //