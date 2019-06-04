//var a = 10;
//
//var b = a;
//
//b = 20;
//
//console.log(a,b);

//var a = {
//    name: "Peter",
//    lastName: "Dinklage"
//};
//
//var b = a;
//
//b.name = "Tyrion";
//
//console.log(a, b);

//var a = "Some text here";

//var a = 3;
//console.log(a === "number");


// var i = 0;

// while (i < 10) {
//     i++;
// }

// // console.log(i);


// function printName(name) {
// 	console.log('Hes name is ' + name);
// }

// printName('Peter');


// var calculateAge = function (currentYear, yearOfBirth) {
// 	return currentYear - yearOfBirth;
// }

// var printAge = function (cAge) {
// 	var current = 2019;
// 	var birthYear = 1962;

// 	return cAge(current, birthYear);
// }

// printAge(calculateAge);



// function combineNumbers(age) {
// 	return function(){
// 		console.log(age)
// 	}
// }

// combineNumbers(23)();

// (function () {
// 	console.log("Something");
// })();

// var someData = [{
//   name: "Peter",
//   age: 32,
//   married: true
// }]
// console.log(someData[0].name);





























// ***** JS PRACTISING *****


// WHAT SHOULD YOU DO ?


// TASK 1:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a function that should receive this object, and repack it to the new object where values from previous object represent both, keys and values of the new object.


// TASK 2: 

// Based on array:

// var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

// Create a function that should repack this array to another one where all numbers are contained in the same array, in the exact order like in provided array.


// TASK 3: 

// Based on array:

// var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

// Create a function that should receive array, get both subarrays from parent array, and pass it into another function, which should then join those arrays. In the end result should be returned and stored in variable which contains first function.


// TASK 4:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a function that should check if there is name in object, if yes it should return another function which should remove name from the function, if no then it should return a function which would set a name propery to the object, with the value passed once function is called.


// TASK 5:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a method that should check if there is name in object, if yes it should create second method in the same object and then call it. The second method should remove name from the function, and console log the object in it's current state. The second method should then create a third method and call it. Third method should add name property back to the object, with value of "Mike", and then console log object.

// BONUS:

// Try to set name with value it had before.
