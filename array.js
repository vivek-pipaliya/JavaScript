// Introduction to array
const car = ["XUV", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = car;

// You can also create an empty array, and provide elements later:
const cars = [];
cars[0] = "XUV";
cars[1] = "Volvo";
cars[2] = "BMW";

document.getElementById("cars").innerHTML = cars;

// how to access array element by using index
document.getElementById("index").innerHTML = cars[1]

// changing an array element
cars[0] = "Audi";
document.getElementById("audi").innerHTML = cars;

// Typeof array
document.getElementById("type").innerHTML = typeof cars;

// Array Methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Array length
document.getElementById("length").innerHTML = fruits.length;

// Array toString()
document.getElementById("tostring").innerHTML = fruits.toString();

// Array at() is used to access an array element by their index
const at = fruits.at(2)
document.getElementById("at").innerHTML = at;

// Array Join()
// It works as toString method , but you can specify the separator in join method
document.getElementById("join").innerHTML = fruits.join("*");

// Array pop()
// by using pop it removes an element from last
const eat = ["Banana", "Orange", "Apple", "Mango"];
const remove = eat.pop();
document.getElementById("pop").innerHTML = eat;
// to see the removed element you can do 
// document.getElementById("pop").innerHTML = remove;

// Array push() 
const add = fruits.push("Kiwi");
document.getElementById("push").innerHTML = fruits;

// Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

const shif = ["Banana", "Orange", "Apple", "Mango"];
const first = shif.shift();
document.getElementById("shift").innerHTML = shif;
// to see the shift element you can do
// document.getElementById("shift").innerHTML = first;

// Array unshift()
const unshif = ["Banana", "Orange", "Apple", "Mango"];
unshif.unshift("Lemmon");
document.getElementById("unshift").innerHTML = unshif;

// Array delete()
// Using delete() leaves undefined holes in the array.
const del = ["Banana", "Orange", "Apple", "Mango"];
delete del[0];
document.getElementById("delete").innerHTML = del;
// document.getElementById("delete").innerHTML = del[0];
// It will show undefine when you print the 0 indenx

// Array concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const mychildern = myGirls.concat(myBoys)
// you can also do 
// myGrils.concat("Joe");
document.getElementById("concat").innerHTML = mychildern;

// Array copyWithin()
document.getElementById("copywithin").innerHTML = fruits.copyWithin(2, 0);

// Array flat()
// Flattening an array means it convert multi-dimensional array into one-dimensional array
const array = [[1, 2], [3, 4], [5, 6]];
const newArray = array.flat();
document.getElementById("flat").innerHTML = newArray;

// Array flatMap()
// map() is a method that helps you to change every element in an array and make a new array.
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 2]);
document.getElementById("flatmap").innerHTML = newArr;

// Array slice()
// It creates a new array and it does not remove any element from source array  
const slic = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = slic.slice(2);
document.getElementById("slice").innerHTML = citrus;

// Array splice
// splice methods is used to add new element to array
/* The first parameter ( ) defines the position where new element should be added.
   The second parameter ( ) defines how many elements should be removed.
   The rest of the parameter (" ", " ") defines the new element to be added.*/
const nameof = ["Banana", "Orange", "Apple", "Mango"];
nameof.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("splice").innerHTML = nameof;

// Array toSpliced
/* The difference between the new toSpliced() method and the old splice() method is that the toSpliced method creates
 a new array, keeping the original array unchanged, while the splice method altered the original array.*/
const months = ["jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(2, 0, "may")
document.getElementById("tospliced").innerHTML = spliced;

// Array Search method

//  Array indexOf()
const list = ["Apple", "Orange", "Apple", "Mango"];
const position = list.indexOf("Apple")+1;
document.getElementById("indexof").innerHTML = position;

// Array lastIndexOf
const lastindex = list.lastIndexOf("Apple")+1;
document.getElementById("indexof").innerHTML = lastindex;

// Array includes
const include = fruits.includes("Orange")
document.getElementById("includes").innerHTML = include;

// Array find
const numbers = [4, 9, 13, 16, 21, 25, 29, 21, 32, 38];
const comp = numbers.find(myfunction);
document.getElementById("find").innerHTML = comp;
function myfunction(value){
    return value > 18;
}

// Array findIndex()
const findindex = numbers.findIndex(myfunction);
document.getElementById("findindex").innerHTML = findindex;

// Array findLast
const temp = [27, 28, 30, 35, 40, 42, 35, 30];
const last = temp.findLast(x => x > 30)
document.getElementById("findlast").innerHTML = last;

// Array findLastIndex()
const pos = temp.findLastIndex(x => x > 40);
document.getElementById("findlastindex").innerHTML = pos;