const motherName = prompt("Enter your mother's first name:");
const streetName = prompt("Enter the street you grew up on:");
const favoriteColor = prompt("Enter your favorite color as a child:");
const age = Number(prompt("Enter your current age:"));
const numberBetween = Number(prompt("Choose a number between 1 and 10:"));

const yearsToMeetFriend = numberBetween;
const bestFriendName = `${motherName} ${streetName}`;
const yearsUntilMarriage = age + numberBetween;
const numberOfChildren = age % numberBetween;
const yearsToDyeHair = Math.round(age / numberBetween);

console.log(`In ${yearsToMeetFriend} years, you are going to meet your best friend named ${bestFriendName}.
  You will get married in ${yearsUntilMarriage} years and have ${numberOfChildren} children.
  In ${yearsToDyeHair} years, you are going to dye your hair ${favoriteColor}.`);

// I watched this youtube video to help me understand Template Literals: https://www.youtube.com/watch?v=K4Kh5gw4PRE