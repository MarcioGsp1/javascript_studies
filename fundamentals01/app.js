/* //Values and Variables
console.log("Márcio");
console.log(25);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let marcio_matilda = "MM";
//let function = 25; function is a keyword. Not allowed to use as variable name
let $function = 25;
let person = "marcio";
let PI = 3.1415;
//camelCase
let myFirstJob = "Rockstar";
let myCurrentJob = "Coder";

let job1 = "rockstar";
let job2 = "programmer";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Márcio');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1998;
console.log(typeof year);
console.log(typeof null);

////////////////////////////////////
// let, const and var

let age_ = 25;
age_ = 22;

//características do let :
/*
    Escopo de bloco: variáveis declaradas com let têm escopo de bloco, o que significa que elas só são visíveis dentro do bloco em que foram declaradas (por exemplo, dentro de um loop ou de uma função).

    Não há hoisting: diferentemente das variáveis declaradas com var, as variáveis declaradas com let não são "elevadas" para o topo do escopo. Isso significa que você não pode acessar a variável let antes de declará-la.

    Pode ser reatribuída: variáveis declaradas com let podem ser reatribuídas a um novo valor. No entanto, você não pode redeclarar uma variável let no mesmo escopo.

    Não pode ser usada antes de declarada: ao contrário de variáveis declaradas com var, as variáveis declaradas com let não podem ser usadas antes de serem declaradas.

    Pode ser declarada sem valor inicial: ao declarar uma variável com let, você pode deixá-la sem valor inicial. Nesse caso, a variável é atribuída automaticamente o valor undefined.

    Pode ser declarada em uma instrução for: ao declarar uma variável com let em uma instrução for, a variável é declarada apenas uma vez e tem escopo de bloco dentro do loop. Isso pode evitar erros comuns ao usar a palavra-chave var nessa situação.
*/

const birthYear = 1998;
// birthYear = 1990;
// const job;

//características do var

/*
Escopo de bloco: variáveis declaradas com const têm escopo de bloco, o que significa que elas só são visíveis dentro do bloco em que foram declaradas (por exemplo, dentro de um loop ou de uma função).

Não há hoisting: assim como com let, as variáveis declaradas com const não são "elevadas" para o topo do escopo.

Valor imutável: o valor de uma variável const não pode ser reatribuído após a sua declaração. No entanto, se a variável é um objeto ou um array, seus valores internos ainda podem ser modificados.

Deve ser inicializada: ao declarar uma variável com const, ela deve ser inicializada com um valor. Caso contrário, ocorrerá um erro.

Não pode ser redeclarada: ao contrário das variáveis declaradas com var e let, você não pode redeclarar uma variável const no mesmo escopo. Se você tentar declarar uma variável const com o mesmo nome de uma já declarada no mesmo escopo, ocorrerá um erro.

Útil para valores fixos: a palavra-chave const é útil para declarar valores que não mudam, como constantes matemáticas, valores padrão de configuração, etc. Ela também é útil para evitar bugs em que o valor de uma variável é alterado acidentalmente em outro lugar do código.

*/

var job = "programmer";
job = "rockstar";

//características do var :
/* 
    Escopo de função: variáveis declaradas com var têm escopo de função, o que significa que elas são visíveis dentro da função em que foram declaradas, independentemente do bloco em que estão.

    Hoisting: as variáveis declaradas com var são "elevadas" para o topo do escopo em que foram declaradas. Isso significa que você pode acessar uma variável var antes de declará-la, mas seu valor será undefined.

    Pode ser reatribuída: variáveis declaradas com var podem ser reatribuídas a um novo valor. No entanto, você não pode redeclarar uma variável var no mesmo escopo.

    Pode ser usada antes de declarada: devido ao hoisting, as variáveis declaradas com var podem ser usadas antes de serem declaradas. No entanto, seu valor será undefined.

    Pode ser declarada sem valor inicial: ao declarar uma variável com var, você pode deixá-la sem valor inicial. Nesse caso, a variável é atribuída automaticamente o valor undefined.

    Pode causar problemas em loops: ao usar var em um loop, a variável tem escopo de função, o que pode levar a erros inesperados. Por exemplo, se você usar var em um loop for, a variável será declarada apenas uma vez e seu valor será atualizado em cada iteração do loop. Isso pode causar problemas se você estiver usando a variável em outros lugares do código. Para evitar esse problema, é recomendável usar let ou const em loops.
*/

////////////////////////////////////
// Basic Operators
// Math operators
const $now = 2023;
const $ageMarcio = now - 1998;
const $ageSarah = now - 2008;
console.log($ageMarcio, $ageSarah);

console.log($ageMarcio * 2, $ageMarcio / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const nome = "Márcio";
const sobrenome = "Silva";
console.log(nome + " " + sobrenome);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log($ageMarcio > $ageSarah); // >, <, >=, <=
console.log($ageSarah >= 18);

const isFullAge = $ageSarah >= 18;

console.log(now - 1998 > now - 2008);

////////////////////////////////////
// Operator Precedence
const now = 2023;
const ageMarcio = now - 1998;
const ageSarah = now - 2008;

console.log(now - 1998 > now - 2008);

let a, b;
a = b = 25 - 10 - 5; // a = b = 10, a = 10
console.log(a, b);

const averageAge = (ageMarcio + ageSarah) / 2;
console.log(ageMarcio, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

const mass_Mark = 78;
const height_Mark = 1.69;
const mass_John = 92;
const height_John = 1.95;

/* const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76; */

const BMI_Mark = mass_Mark / height_Mark ** 2;
const BMI_John = mass_John / (height_Mark * height_Mark);
const markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_Mark, BMI_John, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
const _name = "Márcio";
const _job = "developer";
const birth_year = 1998;
const _year = 2022;

const marcio =
  "I'm " + _name + ", a " + (_year - birthYear) + " years old " + _job + "!";
console.log(marcio);

const marcioNew = `I'm ${_name}, a ${_year - birth_year} year old ${_job}!`;
console.log(marcioNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
with
multiple
lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
const $age = 15;

if ($age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - $age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const _birthYear = 2012;

let century;
if (_birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(Math.floor(BMIMark), Math.floor(BMIJohn));

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${Math.floor(BMIMark)}) is higher than John's (${Math.floor(
      BMIJohn
    )})!`
  );
} else {
  console.log(
    `John's BMI (${Math.floor(BMIJohn)}) is higher than Marks's (${Math.floor(
      BMIMark
    )})!`
  );
}

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Márcio"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 25 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Márcio"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

////////////////////////////////////
// Equality Operators: == vs. ===
const idade = "18";
if (idade === 18) console.log("Você é adulto :D (strict)");

if (idade == 18) console.log("Você é adulto :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(score_Dolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy!");
}

// BONUS 1
const score_Dolphins = (97 + 112 + 80) / 3;
const score_Koalas = (109 + 95 + 50) / 3;
console.log(score_Dolphins, score_Koalas);

if (score_Dolphins > score_Koalas && score_Dolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (score_Koalas > score_Dolphins && score_Koalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  score_Dolphins === score_Koalas &&
  score_Dolphins >= 100 &&
  score_Koalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}

////////////////////////////////////
// The switch Statement
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Study programming");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Coding exercises");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Read documentation");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Study programming");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Coding exercises");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Read documentation");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

////////////////////////////////////
// Statements and Expressions
3 + 4;
1998;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Márcio";
console.log(`I'm ${2023 - 1998} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 30;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

("use strict");
/*
'use strict' é uma funcionalidade do JavaScript que altera o modo de execução do código, tornando-o mais seguro e com menos chances de ocorrer erros e comportamentos inesperados.

Quando o 'use strict' é utilizado no início de um arquivo ou de uma função, o código passa a ser executado em modo restrito, em que algumas funcionalidades do JavaScript são desativadas ou têm o comportamento alterado. Isso ajuda a prevenir erros comuns e a promover boas práticas de programação.
*/

///////////////////////////////////////
// Functions
function logger() {
  console.log("My name is Márcio");
}

// calling
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1998);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1998);

console.log(age1, age2);

///////////////////////////////////////
// Arrow functions

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const $yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log($yearsUntilRetirement(1998, "Márcio"));
console.log($yearsUntilRetirement(1980, "Bob"));

///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(4, 9));

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Márcio"));
console.log(yearsUntilRetirement(1950, "Mike"));

///////////////////////////////////////
// Coding Challenge #5

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
//console.log(calcAverage(3, 4, 5));

// Test 1
let $scoreDolphins = calcAverage(44, 23, 71);
let $scoreKoalas = calcAverage(65, 54, 49);
console.log($scoreDolphins, $scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner($scoreDolphins, $scoreKoalas);

// Test 2
/* $scoreDolphins = calcAverage(85, 54, 41);
$scoreKoalas = calcAverage(23, 34, 27);
 */

///////////////////////////////////
// Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

const first_Name = "Márcio";
const marcio_data = [first_Name, "Silva", 2023 - 1998, "developer", friends];
console.log(marcio_data);
console.log(marcio_data.length);

// Exercise
const calc_Age = function (birthYeah) {
  return 2023 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age_1 = calc_Age(years[0]);
const age_2 = calc_Age(years[1]);
const age_3 = calc_Age(years[years.length - 1]);
console.log(age_1, age_2, age_3);

const ages = [
  calc_Age(years[0]),
  calc_Age(years[1]),
  calc_Age(years[years.length - 1]),
];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

///////////////////////////////////////
// Coding Challenge #6

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 


*/

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

/* const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
} */

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("bills: " + bills + " tips: " + tips + " totals: " + totals);

///////////////////////////////////////
// Introduction to Objects
const marcioArray = [
  "Márcio",
  "Silva",
  2023 - 1998,
  "developer",
  ["Michael", "Peter", "Steven"],
];

const _marcio = {
  firstName: "Márcio",
  lastName: "Silva",
  age: 2023 - 1998,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};

///////////////////////////////////////
// Dot vs. Bracket Notation
const $marcio = {
  firstName: "Márcio",
  lastName: "Silva",
  age: 2023 - 1998,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};
//console.log($marcio);

console.log($marcio.lastName);
console.log($marcio["lastName"]);

const nameKey = "Name";
console.log($marcio["first" + nameKey]);
console.log($marcio["last" + nameKey]);

// console.log($marcio.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Márcio? Choose between firstName, lastName, age, job, and friends"
);

if ($marcio[interestedIn]) {
  console.log($marcio[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

$marcio.location = "Brasil";
$marcio["Github"] = "MarcioGsp1";
console.log($marcio);

// Challenge
// "Márcio has 3 friends, and his best friend is called Michael"
console.log(
  `${$marcio.firstName} has ${$marcio.friends.length} friends, and his best friend is called ${$marcio.friends[0]}`
);

///////////////////////////////////////
// Object Methods

const marcio1 = {
  firstName: "Márcio",
  lastName: "Silva",
  birthYear: 1998,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
  //hasDriversLicense: true,
  hasDriversLicense: false,

  //calcAge: birthYear => 2023 - birthYear

  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(marcio.getSummary());

/* console.log(marcio1.calcAge());

console.log(marcio1.age);
console.log(marcio1.age);
console.log(marcio1.age); */

///////////////////////////////////////
// Coding Challenge #7

/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. */

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);

    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);

    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullname}'s BMI (${Math.floor(mark.calcBMI())}) is higher than ${
      john.fullname
    }'s (${Math.floor(john.calcBMI())})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullname}'s BMI (${Math.floor(john.calcBMI())}) is higher than ${
      mark.fullname
    }'s (${Math.floor(mark.calcBMI())})!`
  );
}

///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

////////////////////////////////////////////
//Looping Arrays, Breaking and Continuing
///////////////////////////////////////////

const marcioArray1 = [
  "Márcio",
  "Silva",
  2023 - 1998,
  "developer",
  ["Jonas", "Peter", "Steven"],
  true,
];
const types = [];
//console.log(marcioArray1[0])
//console.log(marcioArray1[1])
//console.log(marcioArray1[4])
// marcioArray1[5] does NOT exist
for (let i = 0; i < marcioArray1.length; i++) {
  // Reading from jonas array
  console.log(marcioArray1[i], typeof marcioArray1[i]);
  // Filling types array
  types[i] = typeof marcioArray1[i];
  types.push(typeof marcioArray1[i]);
}
console.log(types);

/* const $years = [1991, 2007, 1969, 2020];
const $ages = [];
for (let i = 0; i < $years.length; i++) {
  $ages.push(2023 - $years[i]);
}
console.log($ages); */



/* const marcioArray1 = [
  "Márcio",
  "Silva",
  "developer",
  2023 - 1998
  ["Jonas", "Peter", "Steven"],
  true,
];
 */
// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < marcioArray1.length; i++) {
  if (typeof marcioArray1[i] !== "string") continue;
  console.log(marcioArray1[i], typeof marcioArray1[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < marcioArray1.length; i++) {
  if (typeof marcioArray1[i] === "number") break;
  console.log(marcioArray1[i], typeof marcioArray1[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const marcioArray2 = [
  "Márcio",
  "Silva",
  2023 - 1998,
  "rockstar",
  ["Jonas", "Peter", "Steven"],
  false,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = marcioArray2.length - 1; i >= 0; i--) {
  console.log(i, marcioArray2[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
