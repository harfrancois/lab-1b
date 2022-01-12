'use strict'
function questions() {
  let guest = prompt('What is your user-name?');
  let location = prompt('What city do you live in?');
  let language = prompt('What coding language do you like best?');
  let numbers = prompt('How many cats do you have?');
  let answer = alert(`Hello, ${guest}! You live in ${location}. You like ${language}. You have ${numbers} cats.`);
};
questions();