// Introduction to array
const car = ["XUV", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = "This is an Array:-" + "<br>" + car;

// You can also create an empty array, and provide elements later:
const cars = [];
cars[0] = "XUV";
cars[1] = "Volvo";
cars[2] = "BMW";

document.getElementById("cars").innerHTML = "This is an Array:-" + "<br>" + cars;

// how to access array element by using index
document.getElementById("index").innerHTML = "Access Array by their index:-" + "<br>" + cars[1]

// changing an array element
cars[0] = "Audi";
document.getElementById("audi").innerHTML = "changing an Array element:-" + "<br>" + cars;

// Typeof array
document.getElementById("type").innerHTML = "Typeof Array :-" + "<br>" + typeof cars;

// Array Methods
// Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("length").innerHTML = "Array length() method:-" + "<br>" + fruits.length;

// Array toString()
document.getElementById("tostring").innerHTML = "Array toString() method:-" + "<br>" + fruits.toString();

// Array at() is used to access an array element by their index
const at = fruits.at(2)
document.getElementById("at").innerHTML = "Access Array by using at() method:-" + "<br>" + at;

// Array Join()
// It works as toString method , but you can specify the separator in join method
document.getElementById("join").innerHTML = "Array join() method:-" + "<br>" + fruits.join("*");

// Array pop()
// by using pop it removes an element from last
const eat = ["Banana", "Orange", "Apple", "Mango"];
const remove = eat.pop();
document.getElementById("pop").innerHTML = "Array pop() method:-" + "<br>" + eat;
// to see the removed element you can do 
// document.getElementById("pop").innerHTML = remove;

// Array push() 
const add = fruits.push("Kiwi");
document.getElementById("push").innerHTML = "Array push() method:-" + "<br>" + fruits;

// Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const shif = ["Banana", "Orange", "Apple", "Mango"];
const first = shif.shift();
document.getElementById("shift").innerHTML = "Array shift() method:-" + "<br>" + shif;
// to see the shift element you can do
// document.getElementById("shift").innerHTML = first;

// Array unshift()
const unshif = ["Banana", "Orange", "Apple", "Mango"];
unshif.unshift("Lemmon");
document.getElementById("unshift").innerHTML = "Array unshift() method:-" + "<br>" + unshif;

// Array delete()
// Using delete() leaves undefined holes in the array.
const del = ["Banana", "Orange", "Apple", "Mango"];
delete del[0];
document.getElementById("delete").innerHTML = "Array delete() method:-" + "<br>" + del;
// document.getElementById("delete").innerHTML = del[0];
// It will show undefine when you print the 0 indenx

// Array concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const mychildern = myGirls.concat(myBoys)
// you can also do 
// myGrils.concat("Joe");
document.getElementById("concat").innerHTML = "Array concat() method:-" + "<br>" + mychildern;

// Array copyWithin()
document.getElementById("copywithin").innerHTML = "Array copywithin() method:-" + "<br>" + fruits.copyWithin(2, 0);

// Array flat()
// Flattening an array means it convert multi-dimensional array into one-dimensional array
const array = [[1, 2], [3, 4], [5, 6]];
const newArray = array.flat();
document.getElementById("flat").innerHTML = "Array flat() method:-" + "<br>" + newArray;

// Array flatMap()
// map() is a method that helps you to change every element in an array and make a new array.
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 2]);
document.getElementById("flatmap").innerHTML = "Array flatMap() method:-" + "<br>" + newArr;

// Array slice()
// It creates a new array and it does not remove any element from source array  
const slic = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = slic.slice(2);
document.getElementById("slice").innerHTML = "Array slice() method:-" + "<br>" + citrus;

// Array splice
// splice methods is used to add new element to array
/* The first parameter ( ) defines the position where new element should be added.
   The second parameter ( ) defines how many elements should be removed.
   The rest of the parameter (" ", " ") defines the new element to be added.*/
const nameof = ["Banana", "Orange", "Apple", "Mango"];
nameof.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("splice").innerHTML = "Array splice() method:-" + "<br>" + nameof;

// Array toSpliced
/* The difference between the new toSpliced() method and the old splice() method is that the toSpliced method creates
 a new array, keeping the original array unchanged, while the splice method altered the original array.*/
const months = ["jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(2, 0, "may")
document.getElementById("tospliced").innerHTML = "Array toSpliced() method:-" + "<br>" + spliced;

// Array Search method

//  Array indexOf()
const list = ["Apple", "Orange", "Apple", "Mango"];
const position = list.indexOf("Apple") + 1;
document.getElementById("indexof").innerHTML = "Array indexOf() method:-" + "<br>" + position;

// Array lastIndexOf
const lastindex = list.lastIndexOf("Apple") + 1;
document.getElementById("indexof").innerHTML = "Array lastIndexOf() method:-" + "<br>" + lastindex;

// Array includes
const include = fruits.includes("Orange")
document.getElementById("includes").innerHTML = "Array includes() method:-" + "<br>" + include;

// Array find
const numbers = [4, 9, 13, 16, 21, 25, 29, 21, 32, 38];
const comp = numbers.find(myfunction);
document.getElementById("find").innerHTML = "Array find() method:-" + "<br>" + comp;
function myfunction(value) {
    return value > 18;
}

// Array findIndex()
const findindex = numbers.findIndex(myfunction);
document.getElementById("findindex").innerHTML = "Array findIndex() method:-" + "<br>" + findindex;

// Array findLast
const temp = [27, 28, 30, 35, 40, 42, 35, 30];
const last = temp.findLast(x => x > 30)
document.getElementById("findlast").innerHTML = "Array findLast() method:-" + "<br>" + last;

// Array findLastIndex()
const pos = temp.findLastIndex(x => x > 40);
document.getElementById("findlastindex").innerHTML = "Array findLastIndex() method:-" + "<br>" + pos;

// Array Sort()

// Alphabetic Sort
// Array Sort
const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.sort();
document.getElementById("sort").innerHTML = "Array sort() method:-" + "<br>" + fru;

// Array Reverse()
const frut = ["Banana", "Orange", "Apple", "Mango"];
frut.reverse();
document.getElementById("reverse").innerHTML = "Array reverse() method:-" + "<br>" + frut;

// Array toSorted()
/*The difference between toSorted() and sort() is that the toSorted() method creates a new array,
     keeping the original array unchanged, while the sort() method alters the original array.*/
const mont = ["Jan", "Feb", "Mar", "Apr"];
const sorted = mont.toSorted();
document.getElementById("tosorted").innerHTML = "Array toSorted() method:-" + "<br>" + sorted;

//  Array toReversed()
/*The difference between toReversed() and reverse() is that the toReversed() method creates a new array, 
keeping the original array unchanged, while the reverse() method alters the original array.*/
const reversed = mont.toReversed();
document.getElementById("toreversed").innerHTML = "Array toReversed() method:-" + "<br>" + reversed;

// Numeric Sort
// Array Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
document.getElementById("numeric_sort").innerHTML = "Array numeric sort() method:-" + "<br>" + points;

// Array Random sort
points.sort(function () { return 0.5 - Math.random() });
document.getElementById("random_sort").innerHTML = "Array random sort() method:-" + "<br>" + points;

// Array Math.min()
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
document.getElementById("math_min").innerHTML = "Array Math.min() method:-" + "<br>" + myArrayMin(points);

// Array Math.max()
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
document.getElementById("math_max").innerHTML = "Array Math.max() method:-" + "<br>" + myArrayMax(points);

// Array Home_made_min

// Array Home_made_max

// Array Iteration Methods
// Array forEach()
const num = [45, 4, 9, 16, 25];
let txt = "";
function myfun(value, array, index) {
    txt += value + "<br>"
}
num.forEach(myfun);
document.getElementById("foreach").innerHTML = "Array forEach() method:-" + "<br>" + txt;

// Array Map
const num1 = [45, 4, 9, 16, 25];
const num2 = num1.map(my_function);
function my_function(value, array, index) {
    return value * 2;
}
document.getElementById("map").innerHTML = "Array map() method:-" + "<br>" + num2;

// Array filter()
const age = num1.filter(myFunction);
function myFunction(value) {
    return value > 18;
}
document.getElementById("filter").innerHTML = "Array filter() method:-" + "<br>" + age;

// Array reduce()
const numb = [45, 4, 9, 16, 25];
const sum = numb.reduce(myfunct);
function myfunct(total, value, index, array) {
    return total + value;
}
document.getElementById("reduce").innerHTML = "Array reduce() method:-" + "<br>" + sum;

// Array reduceRight()
// It goes from right to left
const reduce = numb.reduceRight(myfunct);
document.getElementById("reduceright").innerHTML = "Array reduceRight() method:-" + "<br>" + reduce;

// Array every()
// It checks every element of Array is passing the test if all element pass then it returns true otherwise false
const test = numb.every(every)
function every(value, array, index) {
    return value > 18;
}
document.getElementById("every").innerHTML = "Array every() method:-" + "<br>" + test;

// Array some()
// It checks some element of Array is passing the test if some element will pass it returns true , 
// if not a single elemnt will pass the test then it returns false
const check = numb.some(some_fun);
function some_fun(value, array, index) {
    return value > 18;
}
document.getElementById("some").innerHTML = "Array some() method:-" + "<br>" + check;

// Array from()
// Array.from() return any string or number as an Array
const text = "javaScript";
const from = Array.from(text);
document.getElementById("from").innerHTML = "Array from() method:-" + "<br>" + from;

// Array keys()
// Array keys() returns the index of an array element 
const keys = numb.keys();
let val = "";
for (let x of keys) {
    val += x + "<br>";
}
document.getElementById("keys").innerHTML = "Array keys() method:-" + "<br>" + val;

// Array entries()
// The entries() method returns a new Array Iterator object that contains key/value pairs
const entery = frut.entries();
for (let x of entery) {
    document.getElementById("entries").innerHTML += "Array entries() method:-" + "<br>" + x + "<br>";
}

// Array with()
// Array with() method as a safe way to update elements in an array without altering the original array.
const month = ["Januar", "Februar", "Mar", "April"];
const change = month.with(0, "October");
document.getElementById("with").innerHTML = "Array with() method :-" + "<br>" + change;

// Array Spread
//  Array Spread(...) is used to merge array or used to copy an array or to send values to function
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merge = [...arr1, ...arr2];
document.getElementById("spread").innerHTML = "Array spread() method :-" + "<br>" + merge;

// Array Rest (...)
// ...rest means: “grab all the remaining items” into one array. The rest operator ... is used to collect multiple values into one array.
let a, rest;
const arr = [1, 2, 3, 4, 5, 6];
[a, ...rest] = arr;
document.getElementById("rest").innerHTML = "Array rest() method :-" + "<br>" + rest;

// JavaScript Date Objects
// Creating Date Object
const date = new Date();
document.getElementById("date").innerHTML = "new Date() method return current date and time:-" + "<br>" + date;

// There are 9 ways to create a new date object:
// new Date(date string)
const str = new Date("October 15 ,2003 8:10:00");
document.getElementById("a").innerHTML = "new Date(date string) method return date and time:-" + "<br>" + str;

// new Date(year,month)
const year = new Date(2015, 9);
document.getElementById("b").innerHTML = "new Date(year,month) method return year and month:-" + "<br>" + year;

/*
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)*/

// toDateString()
// The toDateString() method converts a date to a more readable format:
const todate = new Date();
document.getElementById("todatestring").innerHTML = "toDateString method converts a date to more readable formate:-" + "<br>" + todate.toDateString();

// toUTCString()
// The toUTCString() method converts a date to a string using the UTC standard:
document.getElementById("toutcstring").innerHTML = "toUTCString method converts a date to a string using UTC standard:-" + "<br>" + todate.toUTCString();

// toISOString()
// The toISOString() method converts a date to a string using the ISO standard:
document.getElementById("toisostring").innerHTML = "toISOString method converts a date to a string using ISO standard:-" + "<br>" + todate.toISOString();

// JavaScript Date Formats
// Date.parse()
// Date.parse() returns the number of milliseconds between the date and January 1, 1970
const msec = Date.parse(new Date());
document.getElementById("parse").innerHTML = "Date.parse() method converts a date into millisecond from January 1,1970:-" + "<br>" + msec;

// JavaScript Get Date Methods
// The getFullYear() Method
const d = new Date("2003-10-15");
document.getElementById("getfullyear").innerHTML = "fullYear() method returns the year of a date as a four digit:-" + "<br>" + d.getFullYear();

// The getMonth() Method
document.getElementById("getmonth").innerHTML = "getMonth() method returns the month of a year between 0 - 11:-" + "<br>" + d.getMonth();

// The getDate() Method
document.getElementById("getdate").innerHTML = "getDate() method returns the date :-" + "<br>" + d.getDate();

// The getHours() Method
const hr = new Date();
document.getElementById("gethours").innerHTML = "getHours() method returns the hour :-" + "<br>" + hr.getHours();

// The getMinutes() Method
document.getElementById("getminutes").innerHTML = "getMinutes() method returns the minutes :-" + "<br>" + hr.getMinutes();

// The getSeconds() Method
document.getElementById("getseconds").innerHTML = "getSeconds() method returns the seconds :-" + "<br>" + hr.getSeconds();

// The getMilliseconds() Method
document.getElementById("getmilliseconds").innerHTML = "getMilliSeconds() method returns the milliseconds :-" + "<br>" + hr.getMilliseconds();

// The getDay() Method
document.getElementById("getday").innerHTML = "getDay() method get the day of the week from a Date object. :-" + "<br>" + hr.getDay();

// The getTime() Method
document.getElementById("gettime").innerHTML = "getTime() method returns the milliseconds since January 1, 1970 :-" + "<br>" + hr.getTime();

// The Date.now() Method
const now = Date.now();
document.getElementById("now").innerHTML = "Date.now() method returns the number of milliseconds since January 1, 1970. :-" + "<br>" + now;

// The getTimezoneOffset() Method
// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
const off = new Date();
document.getElementById("gettimezoneoffset").innerHTML = "getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time :-" + "<br>" + off.getTimezoneOffset();

