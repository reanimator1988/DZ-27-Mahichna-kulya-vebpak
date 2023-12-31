"use strict";

import './style.css';
import myImage from './ball.png';

const answers = [
  "Так, звісно",
  "Є сумніви",
  "Нажаль, Ні",
  "Може бути",
  "Запитати пізніше",
  "Звичайно",
  "Без сумніву",
  "Зараз не можу передбачити",
  "Ймовірно",
  "Гадаю, Так",
  "Гадаю, Ні",
  "Не розраховуйте на це",
  "Це можливо у майбутньому",
  "Ваші шанси дуже високі",
  "Варто спробувати",
  "Зосередьтеся на своїх бажаннях",
  "Дуже ймовірно",
  "Нехай доліється удача",
  "Потрібно трохи зачекати",
  "Важливо вірити в себе",
  "Ваші мрії збудуться"
];

const imageElement = document.createElement('img');
imageElement.src = myImage;
document.querySelector('.magic-8-ball').appendChild(imageElement);

window.shakeMagic8Ball = function() {
  const magic8Ball = document.querySelector(".magic-8-ball");
  const answerDisplay = document.querySelector(".answer-text");
  
  magic8Ball.classList.add("shake-animation");
  
  answerDisplay.textContent = '';

  setTimeout(() => {
      magic8Ball.classList.remove("shake-animation");

      const randomIndex = Math.floor(Math.random() * answers.length);
      const randomAnswer = answers[randomIndex];

      answerDisplay.textContent = randomAnswer;
  }, 1000);
};
