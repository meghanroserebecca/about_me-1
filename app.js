'use strict';
alert('You are going to learn about me, Mike D. Don\'t worry, I\'ll try to keep it interesting...');
var score = 0;
var userName = prompt('Welcome to the guessing game. To start off with, what is your name?');
//*var firstQuestion = prompt('Did you know that I grew up in Texas?');

function firstQuestionFunction() {
  var firstQuestion = prompt('Did you know that I grew up in Texas?');
  console.log('User responded to the first question with ' + firstQuestion)
  if(firstQuestion.toLowerCase() === 'yes' || firstQuestion.toLowerCase() === 'y') {
    alert('How did you know that?');
    score++;
  } else if (firstQuestion.toLowerCase() === 'no' || firstQuestion.toLowerCase() === 'n') {
    alert('Why would you?');
  } else {
    alert('Whaaaa?');
  }
}

firstQuestionFunction();

function secondQuestionFunction() {
  var secondQuestion = prompt('Did you know I spent my teen years in Colorado?');
  console.log('User responded to the second question with: ' + secondQuestion);

  if(secondQuestion.toLowerCase() === 'yes' || secondQuestion.toLowerCase() === 'y') {
    alert('Why do you know so much about me...?');
    score++;
  } else if (secondQuestion.toLowerCase() === 'no' || secondQuestion.toLowerCase() === 'n') {
    alert('Good. I\'d be worried if you did!');
  } else {
    alert('Don\'t speak nonsense.');
  }
}

secondQuestionFunction();

function thirdQuestionFunction() {
  var thirdQuestion = prompt('I spent a year teaching English abroad. What country do you think it was in: Thailand, Brazil or China?');
  console.log('User responded to the third question with: ' + thirdQuestion);
  if(thirdQuestion.toLowerCase() === 'thailand' || thirdQuestion.toLowerCase() === 't') {
    alert('Nope!');
  } else if (thirdQuestion.toLowerCase() === 'brazil' || thirdQuestion.toLowerCase() === 'b') {
    alert('Wrong!');
  } else if (thirdQuestion.toLowerCase() === 'china' || thirdQuestion.toLowerCase() === 'c') {
    alert('You got it!');
    score++;
  } else {
    alert('Reply with Thailand, Brazil or China!');
  }
}

thirdQuestionFunction();

function fourthQuestionFunction() {
  var fourthQuestion = prompt('I\'ve worked a variety of jobs, including landscaper, courier driver and web content writer. Which job do you think Code201 is going to be most compatible with?');
  console.log('User responded to the fourth question with: ' + fourthQuestion);

  if(fourthQuestion.toLowerCase() === 'landscaper' || fourthQuestion.toLowerCase() === 'l') {
    alert('Maybe, but not in my case.');
  } else if (fourthQuestion.toLowerCase() === 'courier driver' || fourthQuestion.toLowerCase() === 'c') {
    alert('Possibly, but not for me.');
  } else if (fourthQuestion.toLowerCase() === 'web content writer' || fourthQuestion.toLowerCase() === 'w') {
    alert('Yep. Makes sense, doesn\'t it?');
    score++;
  } else {
    alert('You gotta give one of the answers I asked for!');
  }
}

fourthQuestionFunction();

/*var fifthQuestion = prompt('Do you think I\'ve got some amazing JavaScript skills???');
console.log('User responded to the fifth question with: ' + fifthQuestion);

if(fifthQuestion.toLowerCase() === 'yes' || fifthQuestion.toLowerCase() === 'y') {
  alert('Thanks. Unfortunately, you are wrong. If my skills were amazing, I wouldn\'t be here!');
} else if (fifthQuestion.toLowerCase() === 'no' || fifthQuestion.toLowerCase === 'n') {
  alert('I appreciate your honesty. Come back in four weeks.');
  score++;
} else {
  alert('This is a yes or no question. Sheesh!');
}

//*Wednesday lab work//
//*Guess a number, indicate high or low, give four chances. //
var numberGuess = parseInt(prompt('How many pieces of pizza can I eat in one sitting?'));

for (var i = 0; i < 4; i++) {
  console.log('Try again!');

  var secretNumber = 10;
  console.log('The guess is: ', numberGuess, 'and the secret is:', secretNumber);
  console.log('numberGuess has a type', typeof numberGuess, 'secretNumber has type', typeof secretNumber);
  if (numberGuess < secretNumber) {
    alert('Nah, that\'s not it. Aim a little higher');
    numberGuess = parseInt(prompt('Try again. How many pieces of pizza can I eat in one sitting?'));
  } else if (numberGuess > secretNumber) {
    alert('Too high. Chill and aim lower.');
    numberGuess = parseInt(prompt('Try again. How many pieces of pizza can I eat in one sitting?'));
  } else if (numberGuess === secretNumber){
    alert('Right! I love pizza. What can I say?');
    score++;
    break;
  } else {
    alert('Answer with a number, please.');
  }
}

//*Guess my favorite hobbies from an array. Six tries, display all correct answers at the end.//
var hobbyGuess = prompt('Do I like lawn care, eating hot pot, eating tofu, hiking, playing with my dog or eating pizza? You get six tries.');
var hobbies = ['lawn care', 'eating hot pot', 'eating tofu', 'hiking', 'playing with my dog', 'eating pizza'];
var correctAnswer = 'Correct. In fact, I like all of these things!!';
var count = 0;
var answerIsFound = false;

while (count < 6) {
  if (answerIsFound === true) {
    alert(correctAnswer);
    score++;
    break;
  } else {
    alert('Sorry, wrong.');
    hobbyGuess = prompt('Try again. Do I like lawn care, eating hot pot, eating tofu, hiking, playing with my dog or eating pizza?');
    count++;
  }
  for (var index = 0; index < hobbies.length; index++) {
    if (hobbyGuess === hobbies[index]) {
      answerIsFound = true;
      count++;
      break;
    }
  }
  if (count > 5) {
    alert('Six fails... Well, I like lawn care, eating hot pot, eating tofu, hiking, playing with my dog or eating pizza. So yeah, I like all of them!');
  }
}
alert('Thanks for playing ' + userName + ', you got ' + score + ' right!');*/
