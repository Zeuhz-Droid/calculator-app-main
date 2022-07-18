# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Frontend Mentor - Calculator app solution](#frontend-mentor---calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

This is a calculator app, which allow users to;

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](images/solution%20desktop%20theme-1.png)

### Links

- Solution URL: [Solution to Codes](https://github.com/Zeuhz-Droid/calculator-app-main)
- Live Site URL: [Hosted Github site](https://zeuhz-droid.github.io/calculator-app-main/)

## My process

I took the desktop first approach regarding my workflow.
I wrote ground HTML and CSS before implementing any JavaScript functionality.
This was particularly coded with the functional programming paradigm.
It took me some days to complete this, as I had so many possible flowchart, pseudo codes and ideas to creating a calculator in my head, but it wasn't till i wrote some out and tried them, I realised some of those methods ended up as operation stalemate or couldn't cater for multiple operations.
This was challenging, I had to consult a friend [Ifedayo](https://github.com/theifedayo), who through Discord put me through a thing about using the functional programming paradigm. Then i went back to my board and finally coded something up that worked 95%.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JavaScript](https://javascript.org/)

### What I learned

Learnt how to structure my css well enough to accomodate my Javascript, how to plan a javascript flowchart...
I learnt how to functional programming paradigm a little better.

```html
<input
  type="radio"
  name="theme"
  id="theme1"
  class="theme theme--1 show"
  checked="checked"
/>
```

```css
.numbers button:active span {
  backdrop-filter: brightness(130%);
}
```

```js
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
```

### Continued development

My main focus is on creating flowcharts, and implementing them with writing eloquent javascript. --still on functional programming though. LOL!

OOP comes after I have mastered this, but I am already soaking OOP in little by little.

### Useful resources

- [Stack overflow](https://stackoverflow.com/) - This helped me recall some array methods that were a litle bit blurry in memory.
-
- [Google](https://www.google.com) - and ofcourse, dear old google. Had a lot to research on this project, things like, array methods, programming paradigms and so on.

## Author

- Website - [Zeuhz Droid](https://github.com/Zeuhz-Droid)
- Frontend Mentor - [@Zeuhz-Droid](https://www.frontendmentor.io/profile/Zeuhz-Droid)
- Twitter - [@zeuhzDroid](https://www.twitter.com/zeuhzDroid)

## Acknowledgments

I give glory to the King of Glory who kept me alive to write this codes, Mr Jonas my tutor, and Ifedayo codes my friend.
