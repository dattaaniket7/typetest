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

let currentBalance = 100;

// Simulate a withdrawal
function withdraw(amount: number) {
  currentBalance -= amount;

  console.log(`Current Balance: $${currentBalance}`);
}

withdraw(25);
