"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

  
/*Aqui não chamamos a função como normalmente fazemos. ex: closeModal(). Desse modo, a função seria imediatamente chamada assim que o javascript fosse executado. Neste caso a função só será chamada quando um desses eventos acontecer.*/
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
