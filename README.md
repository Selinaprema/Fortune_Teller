# Fortune Teller

## Description
This project is a fun **Fortune Teller** application that predicts aspects of a user's future based on their responses to a few personal questions. It uses HTML to gather input from the user and JavaScript to generate predictions.

## Features
- Collects user input:
  - Mother's first name
  - Street they grew up on
  - Favorite childhood color
  - Current age
  - A number between 1 and 10
- Generates a "fortune" based on the input:
  - Predicts when the user will meet their best friend
  - Determines the best friend's name
  - Calculates when the user will get married
  - Predicts how many children they will have
  - Estimates when they will dye their hair their childhood favorite color

## Files Included
- `index.html` - HTML form to collect user input
- `fortuneTeller.js` - JavaScript file to process user input and generate a fortune

## Formula Breakdown
- `bestFriendName = (mother's name) + (street name)`
- `yearsToMeetFriend = chosen number`
- `yearsToMarriage = age + chosen number`
- `numChildren = age % chosen number`
- `yearsToDyeHair = Math.round(age / chosen number)`


## How to Use
1. Open `index.html` in a browser.
2. Fill in the input fields.
3. Click submit to see your personalized fortune.

## Technologies Used
- HTML
- JavaScript

## Author
- Selina Prema


