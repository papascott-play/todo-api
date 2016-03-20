// var person = {
//   name: 'Andrew',
//   age: 21
// };
//
// function updatePerson (obj) {
//   // obj = {
//   //   name: 'Andrew',
//   //   age: 24
//   // }
//   obj.age = 24;
// }
//
// updatePerson(person);
// console.log(person);

// Array Example

var grades = [15, 37];

function update1(ary) {
	ary = [15, 37, 42];
}

function update2(ary) {
	ary.push(42);
	debugger;
}

update1(grades);
console.log(grades);

update2(grades);
console.log(grades);