let currentBalance = 100;

// Simulate a withdrawal
function withdraw(amount) {
  currentBalance -= amount;

  console.log(`Current Balance: $${currentBalance}`);
}

withdraw("25");
