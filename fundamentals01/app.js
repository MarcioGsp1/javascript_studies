//Values and Variables
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

javascriptIsFun = 'YES!';
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


var job = 'programmer';
job = 'rockstar'

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

const nome = 'Márcio';
const sobrenome = 'Silva';
console.log(nome + ' ' + sobrenome);



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
const _name = 'Márcio';
const _job = 'developer';
const birth_year = 1998;
const _year = 2022;

const marcio = "I'm " + _name + ', a ' + (_year - birthYear) + ' years old ' + _job + '!';
console.log(marcio);

const marcioNew = `I'm ${_name}, a ${_year - birth_year} year old ${_job}!`;
console.log(marcioNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with
multiple
lines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
const $age = 15;

if ($age >= 18) {
  console.log('Sarah can start driving license 🚗');
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
  console.log(`Mark's BMI (${Math.floor(BMIMark)}) is higher than John's (${Math.floor(BMIJohn)})!`)
} else {
  console.log(`John's BMI (${Math.floor(BMIJohn)}) is higher than Marks's (${Math.floor(BMIMark)})!`)
}

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1998';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Márcio'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 25 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Márcio'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const idade = '18';
if (idade === 18) console.log('Você é adulto :D (strict)');

if (idade == 18) console.log('Você é adulto :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

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
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
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
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy!');
}

// BONUS 1
const score_Dolphins = (97 + 112 + 80) / 3;
const score_Koalas = (109 + 95 + 50) / 3;
console.log(score_Dolphins, score_Koalas);

if (score_Dolphins > score_Koalas && score_Dolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (score_Koalas > score_Dolphins && score_Koalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (score_Dolphins === score_Koalas && score_Dolphins >= 100 && score_Koalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}



////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Study programming');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Coding exercises');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Read documentation');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Study programming');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Coding exercises');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Read documentation');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1998
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Márcio';
console.log(`I'm ${2023 - 1998} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 30;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


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
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
