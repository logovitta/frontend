//OBJECTS
//collection nome:valore

//due modi di creare
//var obj = new Object();
//var obj = {}; --->object literal syntax and is more convenient. Formato JSON

var obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};

console.log(obj);
console.log(obj.for);
console.log(obj["for"]); // bracket notation

//creare prototipo oggetto - 3 modo di "creare" oggetto, anche se in verità si crea assegandolo

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var you = new Person("You", 24);
console.log(you)


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object