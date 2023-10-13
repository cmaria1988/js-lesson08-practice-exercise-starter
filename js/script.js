var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

//Exercise 1
//Log out to the console each element of the stuff 
//array with even-numbered indexes. 
//Hint: Use the modulus (%) operator to return only even-numbered 
//(i.e., divisible by 2 with no remainder) index positions: (index % 2 === 0).
/*
stuff.forEach(function(item, index){
  if(index % 2 === 0){
    console.log(item);
  }
});
*/

//Exercise 2
/*
var removeItem = function(array, item){
  var i = array.indexOf(item);
  if(i=== -1){
    console.log("There is no such an item");
  }else{
    array.splice(i,1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "tea");
console.log(stuff);
*/

//Excercise 3
var newArray = [];
for(var item of stuff){
  if(item.includes("s")){
    newArray.push(item);
  }
}
console.log(newArray);

var containS = stuff.filter(function(item){
  return item.includes("s");
});
console.log(containS);