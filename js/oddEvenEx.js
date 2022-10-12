let itNumber = 20;

for (let i = 1; i <= itNumber; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
let fizzbuzzNumber = "";

console.log(`
fizzbuzz ex :`);
for (let i = 1; i <= itNumber; i++) {
  fizzbuzzNumber = String(i);

  if (i % 5 === 0 && i % 3 === 0) {
    fizzbuzzNumber = "fizzbuzz";
  } else if (i % 3 === 0) {
    fizzbuzzNumber = "fizz";
  } else if (i % 5 === 0) {
    fizzbuzzNumber = "buzz";
  }

  if (i % 2 === 0) {
    console.log(`${fizzbuzzNumber} is even`);
  } else {
    console.log(`${fizzbuzzNumber} is odd`);
  }
}
