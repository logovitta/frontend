//ARRAY
//special type of objects

var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
console.log(a.length); // non 2 ma 3


//lenght non la quantità di valori, ma l'ultimo indice
a[10]='cacca';
console.log(a.length); // non 4 ma 11

for(const i of a){
    console.log(i)
}

//oppure

['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
    // Do something with currentValue or array[index]

    console.log(currentValue+' - '+index)
  });

  //operazione su array
  a.push('pipì')
  console.log(a)