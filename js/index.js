// Iteration 1: Names and Input
let hacker1 = "Anthony";
hacker1[2] = "C"; //immuable don't do anything
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "NavigatorName";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
// Driver's name in capital letter spaced
let capitalNameResult = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalNameResult += hacker1.at(i).toUpperCase() + " ";
}
console.log(capitalNameResult.slice(0, -1));

// Navigator's name in reverse
let reverseNameResult = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNameResult += hacker2.at(i);
}
console.log(reverseNameResult);

// lexicographic order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// a.localeCompare(b) logicom order

//Bonus 1 :

const lorem3par = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum sit amet sapien eu maximus. Aenean volutpat quam ut tortor mollis, sit amet porta mauris sagittis. Vestibulum ac lorem ante. Maecenas eu bibendum tortor, ut lobortis tellus. Vestibulum bibendum ligula ipsum, sit amet eleifend quam dapibus ut. Aliquam nec elit erat. Vestibulum porta ornare tincidunt. Sed imperdiet sem at ex hendrerit, a venenatis dolor laoreet. Nunc interdum magna posuere ultrices convallis. Nunc ligula nulla, efficitur at commodo ut, laoreet et nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus in mi a sapien rutrum tristique vitae et risus.

Ut eu placerat diam, sit amet sodales urna. Curabitur molestie nunc sit amet ex dictum efficitur. Etiam quis ultricies dolor, et vestibulum nisi. Integer elementum consectetur ante vitae vehicula. Donec pharetra pulvinar ipsum, sit amet tincidunt massa aliquam eu. Phasellus imperdiet egestas lacus at fermentum. Quisque placerat justo magna, eget pretium diam fringilla eu. Nullam posuere varius augue eu fermentum.

Aenean et orci et massa rhoncus semper imperdiet nec erat. Duis fermentum enim id est rhoncus fermentum. Nulla vel urna at enim placerat faucibus. Sed vehicula, augue eget tincidunt elementum, mauris ligula tristique erat, a aliquet risus orci non ante. Sed eros enim, egestas sed mi eget, aliquam pretium sem. Nullam dictum arcu vitae ex vulputate imperdiet. Mauris iaculis, nisi at accumsan commodo, justo mauris rhoncus lectus, vel sagittis mauris erat id massa. Vestibulum sit amet erat et ante venenatis tristique nec et leo. Phasellus nunc ipsum, pretium vitae lobortis non, lacinia sed odio. Vivamus mattis justo in nunc iaculis dictum. Maecenas ac viverra magna, a maximus nisl. Morbi sit amet neque a ex aliquet porttitor. Mauris a quam in eros vulputate laoreet.`;

// count the number of words
let wordNumber = 0;

for (let character of lorem3par) {
  if (character === " " || character === "\n") {
    wordNumber++;
  }
}
console.log("This Lorem has ", wordNumber, " words.");

// count the "et"

let etNumber = 0;
let previousIsE = false;

for (let character of lorem3par) {
  if (character.toLocaleLowerCase() === "t" && previousIsE) {
    etNumber++;
  }
  if (character.toLocaleLowerCase() === "e") {
    previousIsE = true;
  } else {
    previousIsE = false;
  }
}
console.log("This Lorem has ", etNumber, ' "et".');

//Bonus 2 :

let phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(phrase) {
  let phraseLetter = "",
    phraseLetterReverse = "";

  for (character of phrase) {
    if (character.toUpperCase() !== character.toLowerCase()) {
      phraseLetter += character;
    }
  }

  for (let i = phraseLetter.length - 1; i >= 0; i--) {
    phraseLetterReverse += phraseLetter[i];
  }

  return phraseLetterReverse.toUpperCase() === phraseLetter.toUpperCase();
}

console.log(isPalindrome(phraseToCheck));
