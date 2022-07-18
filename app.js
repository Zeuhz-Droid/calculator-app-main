"use strict";

// PAGE ELEMENTS
const header = document.querySelector("#pass-header");
const btnsTheme = document.querySelector(".btns__theme");
const screen = document.querySelector(".screen");
const numbers = document.querySelector(".numbers");
const buttons = document.querySelectorAll("button");

// THEMES
const themes = document.querySelectorAll(".theme");
const theme1 = document.querySelector(".theme--1");
const theme2 = document.querySelector(".theme--2");
const theme3 = document.querySelector(".theme--3");

// SCREEN AND BUTTON NUMBERS
const result = document.querySelector(".result");
const numberAll = document.querySelectorAll(".number");

// BUTTON NUMBER OPERATORS
const del = document.querySelector(".del");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const assignment = document.querySelector(".assignment");
const reset = document.querySelector(".reset");

let operator,
  operand = "",
  operands = [],
  answer = 0,
  isOperator = false,
  isAssignment = false;

result.textContent = 0;

const init = function () {
  operand = "";
  operands = [];
  answer = 0;
  (isOperator = false), (isAssignment = false);
  result.textContent = "0";
};
reset.addEventListener("click", init);

const getNum = function (numbers) {
  numbers.forEach((number) =>
    number.addEventListener("click", function () {
      operand += this.value;
      result.textContent = operand;
      result.classList.remove("flash");
    })
  );
};
getNum(numberAll);

const initOperation = function (operator = "=") {
  isOperator = true;
  operator = `${operator}`;
  operands.push(operand, operator);
  operand = "";
  result.classList.add("flash");
};

plus.addEventListener("click", function () {
  initOperation("plus");
});

minus.addEventListener("click", function () {
  initOperation("minus");
});

divide.addEventListener("click", function () {
  initOperation("divide");
});

multiply.addEventListener("click", function () {
  initOperation("multiply");
});

assignment.addEventListener("click", function () {
  initOperation();
  isAssignment = true;
  console.log(operands);
  answer = +operands[0];
  for (let i = 0; i < operands.length; i++) {
    if (operands[i] === "plus") {
      answer += +operands[i + 1];
      console.log(answer);
    }

    if (operands[i] === "minus") {
      answer -= +operands[i + 1];
      console.log(answer);
    }

    if (operands[i] === "divide") {
      answer /= +operands[i + 1];
    }

    if (operands[i] === "multiply") {
      answer *= +operands[i + 1];
    }
  }
  result.textContent = answer;
  operands = [];
});

del.addEventListener("click", function () {
  const numArr = result.textContent.split("");
  const numToUse = numArr.slice(0, -1).join("");
  result.textContent = numToUse;
  operand = numToUse;
});

// THE THEME TOGGLE FUNCTIONALITY
themes.forEach((theme) =>
  theme.addEventListener("click", function () {
    if (theme.checked) {
      theme.classList.add("show");
      theme.classList.remove("hide");
      themes.forEach((theme) => {
        if (!theme.checked) {
          theme.classList.remove("show");
          theme.classList.add("hide");
        }
      });
    }
  })
);

themes.forEach((theme) =>
  theme.addEventListener("click", function () {
    if (theme.id === "theme1") {
      document.body.style.backgroundColor = " hsl(222, 26%, 31%)";
      header.style.color = "hsl(0, 0%, 100%)";
      btnsTheme.style.backgroundColor = "hsl(223, 31%, 20%)";
      screen.style.backgroundColor = "hsl(224, 36%, 15%)";
      screen.style.color = "hsl(0, 0%, 100%)";
      numbers.style.backgroundColor = "hsl(223, 31%, 20%)";
      buttons.forEach((btn) => {
        btn.style.color = "hsl(60, 10%, 19%)";
        btn.style.backgroundColor = "hsl(30, 25%, 89%)";
        btn.style.boxShadow = "0px 0.35rem 0.1rem hsl(28, 16%, 65%)";
      });
      reset.style.backgroundColor = "hsl(225, 21%, 49%)";
      del.style.backgroundColor = "hsl(225, 21%, 49%)";
      reset.style.boxShadow = "0px 0.35rem 0.1rem hsl(224, 28%, 35%)";
      del.style.boxShadow = "0px 0.35rem 0.1rem hsl(224, 28%, 35%)";
      reset.style.color = "white";
      del.style.color = "white";

      assignment.style.backgroundColor = "hsl(6, 63%, 50%)";
      assignment.style.boxShadow = "0px 0.35rem 0.1rem  hsl(6, 70%, 34%)";
      assignment.style.color = "hsl(0, 0%, 100%)";
    }
    if (theme.id === "theme2") {
      document.body.style.backgroundColor = " hsl(0, 0%, 90%)";
      header.style.color = "hsl(60, 10%, 19%)";
      btnsTheme.style.backgroundColor = "hsl(0, 5%, 81%)";
      screen.style.backgroundColor = "hsl(0, 0%, 93%)";
      screen.style.color = "hsl(60, 10%, 19%)";
      numbers.style.backgroundColor = "hsl(0, 5%, 81%)";
      buttons.forEach((btn) => {
        btn.style.color = "hsl(60, 10%, 19%)";
        btn.style.backgroundColor = "hsl(45, 7%, 89%)";
        btn.style.boxShadow = "0px 0.35rem 0.1rem hsl(35, 11%, 61%)";
      });
      reset.style.backgroundColor = "hsl(185, 42%, 37%)";
      del.style.backgroundColor = "hsl(185, 42%, 37%)";
      reset.style.boxShadow = "0px 0.35rem 0.1rem hsl(185, 58%, 25%)";
      del.style.boxShadow = "0px 0.35rem 0.1rem hsl(185, 58%, 25%)";

      assignment.style.backgroundColor = "hsl(25, 98%, 40%)";
      assignment.style.boxShadow = "0px 0.35rem 0.1rem  hsl(25, 99%, 27%)";
      assignment.style.color = "hsl(0, 0%, 100%)";
    }
    if (theme.id === "theme3") {
      document.body.style.backgroundColor = " hsl(268, 75%, 9%)";
      header.style.color = "hsl(52, 100%, 62%)";
      btnsTheme.style.backgroundColor = "hsl(268, 71%, 12%)";
      screen.style.backgroundColor = "hsl(268, 71%, 12%)";
      screen.style.color = "hsl(52, 100%, 62%)";
      numbers.style.backgroundColor = "hsl(268, 71%, 12%)";
      buttons.forEach((btn) => {
        btn.style.color = "hsl(52, 100%, 62%)";
        btn.style.backgroundColor = "hsl(268, 47%, 21%)";
        btn.style.boxShadow = "0px 0.35rem 0.1rem hsl(285, 91%, 52%)";
      });
      reset.style.backgroundColor = "hsl(281, 89%, 26%)";
      del.style.backgroundColor = "hsl(281, 89%, 26%)";
      reset.style.boxShadow = "0px 0.35rem 0.1rem hsl(285, 91%, 52%)";
      del.style.boxShadow = "0px 0.35rem 0.1rem hsl(285, 91%, 52%)";

      assignment.style.backgroundColor = "hsl(176, 100%, 44%)";
      assignment.style.boxShadow = "0px 0.35rem 0.1rem hsl(177, 92%, 70%)";
      assignment.style.color = "black";
    }
  })
);

// IMPLEMENTING CALCULATOR FUNCTIONALITY
