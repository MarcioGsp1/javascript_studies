"use strict";

/*const text = document.querySelector(".message").textContent;

const correct = (document.querySelector(".message").textContent =
  "Correct Number!");

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 30;

document.querySelector(".guess").value;
document.querySelector(".guess").value = 23;
}*/

//Essa função não será chamada imediatamente quando o código for executado, apenas quando o evento de click no botão check acontecer. O javascript automaticamente irá chamar a função.

let secretNumber = Math.trunc(Math.random() * 30) + 1;

//Sempre bom ter os dados relevantes da aplicação armazenados em nosso código.
let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct number!";

    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector("number").style.width = "30rem";

    //when guess is too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    score--;
    document.querySelector(".score").textContent = score;

    if (score <= 0) {
      document.querySelector(".message").textContent = "GAME OVER!";
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    score -= 1;
    document.querySelector(".score").textContent = score;

    if (score <= 0) {
      document.querySelector(".message").textContent = "GAME OVER!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

/* 
 document.querySelector(".again").addEventListener("click", () => {
  window.location.reload();
});
 */
