// interface Point {
//   x: number;
//   y: number;
// }

// function logPoint(p: Point) {
//   console.log(`${p.x}, ${p.y}`);
// }

// // Logs "12, 26"

// const point = { x: 12, y: 26 };
// logPoint(point);

// const person = { name: "Aniket", job: "Messing things up" };

// person.name;

// const person: any = { name: "Aniket", job: "Messing things up" };

// let currentBalance = 100;

// // Simulate a withdrawal
// function withdraw(amount: number) {
//   currentBalance -= amount;

//   console.log(`Current Balance: $${currentBalance}`);
// }

// withdraw(25);

// let counter: number = 0;

// type Person = {
//   first: string;
//   last: string;
// };

// let person = { first: "Aniket", last: "Datta" };

// const formatName = (p: { first: string; last: string }): string => "okay";

// const formated = formatName(person);

// console.log(formated);

function add(x: number, y: number | string) {
  //   return x + y;
  if (typeof y == "string") {
    return 0;
  }
  return x + y;
}
