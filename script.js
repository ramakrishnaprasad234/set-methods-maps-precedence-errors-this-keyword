
myNumbers = {};


myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 5;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let text = ""
for (const num of myNumbers) {
  text += num +"<br>"
}

document.getElementById("demo").innerHTML = text;




const letters = new Set(["a","b","c"]);

letters.add("d");
letters.add("e");

document.getElementById("demo1").innerHTML = "The set has " + letters.size + " values.";

const letters1 = new Set(["a","b","c"]);

let text1 = "";

  
for (let x of letters1){
    text1 += x + "<br>";
}

document.getElementById("demo2").innerHTML = text1;


const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

let numb = fruits.get("bananas");
document.getElementById("demo3").innerHTML = "There are " + numb + " bananas.";


const person = {first:"rama",last:"krishna",age:28};

let {first,last,age,contury = "india"} = person;
document.getElementById("demo4").innerHTML = first + " "+ last+" "+age +contury ;

function myFunction() {
    let text2 = document.getElementById("demo5").innerHTML;
    document.getElementById("demo5").innerHTML = text2.replace("Microsoft","w3school");
}


function myFunctions() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo6").value;
  try { 
    if(x.trim() == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}

const persons = {name:"rama",last:"krishna",age:28,
    fullNames: function(){
       return this.name +" "+ this.last;
    }

}
document.getElementById("demo7").innerHTML = persons.fullNames();