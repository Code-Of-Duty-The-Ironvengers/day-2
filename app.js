console.log("Start of class");
// numbers and strings
// booleans, null, undefined
// control flow (if else)
// looping

let number = 1;
number += 2;

let name = "Tony";
name += "G";
console.log("TGny");
console.log("G");
console.log("Tony");
console.log("name:", name);
// const letterO = name[1];
// console.log("letterO:", letterO);

// Booleans

true;
false;
console.log(typeof true);
// falsy value are values that javascript kinda evaluates them to false
// null, undefined, NaN, 0, -0, ''
// everything else is truthy (not boolean)

let age = 5 - 6;

if (age) {
  console.log("YOU ARE ALIVE");
} else {
  console.log("Give or take 9 months, youll be");
}

const ageOfStudent = 19;

if (ageOfStudent < 12) {
  console.log("NO! PLEASE DONT, THINK OF YOUR DEVELOPING LIVER");
} else if (ageOfStudent < 15) {
  console.log(
    "THERES NOT REALLY MUCH WE CAN DO, YOULL FIND A WAY TO DRINK EITHER WAY"
  );
} else {
  console.log("Hmm, in some countries");
}

const nameOfStudent = "Guillermo";

switch (nameOfStudent) {
  case "Nico": {
    console.log("Oh, youre not guillermo, you're nico!");
    break;
  }
  case "Guillermo": {
    console.log("AH there you are");
    break;
  }
  default: {
    console.log("Hmm, i guess youre not guillermo");
    break;
  }
}

for (let i = 0; i < 10; i += 1) {
  //
  console.log("HEY THERE");
}
//  i = 0 check
// 0 < 10? yes
// console.log("Hey there")
// i+=1
// now, i = 1
// 1 < 10? yes
// console.log("Hey there")
// i+=1
// cool, 2 < 10 ? yes

for (let i = 100; i >= 0; i--) {
  console.log(i);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log("alphabet length:", alphabet.length);

// we start a value: let i = 0
// define the condition for the loop to keep running i being smaller than the length of the alphabet string
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);
}

// do {
//   console.log("IM SO FANCY");
// } while (false);
let anyOtherOne = 1;
while (anyOtherOne < 50) {
  console.log(anyOtherOne);
  anyOtherOne++;
  if (anyOtherOne === 1000) {
    break;
  }
}

let value;
// OR, AND, SMALLER THAN, GREATER THAN, GREATER OR EQUAL, SMALLER OR EQUAL, DOUBLE, TRIPLE

console.clear();
console.log(1 || 5);
console.log(0 || undefined || -0 || true || true || 1);
console.log(true && "HEY THERE");
console.log(1 && true && "tiffany" && NaN && 1 && Infinity);
console.log(1 < 10);
console.clear();
// triple equals = strict equality
console.log(1 == "1");

const abhijeet = "Abhijeet";

let upperAndLower = "";
for (let index = 0; index < abhijeet.length; index++) {
  const letter = abhijeet[index];

  if (index % 2 === 0) {
    upperAndLower += letter.toUpperCase();
  } else {
    upperAndLower += letter.toLocaleLowerCase();
  }
}
console.log("upperAndLower:", upperAndLower);
