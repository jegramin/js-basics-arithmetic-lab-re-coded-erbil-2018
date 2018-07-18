/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = 1000000000 + oldID;
if (Number.isInteger(currentAge)) {
  ageIsValid = true;
} else {
  ageIsValid = false;
}
let randomNumber = Math.random() * 19 + 1;
let randomInteger = Math.floor(randomNumber) ;
let randomUserID = Number.isInteger();
expect(randomUserID).to.be.at.least(1000000001).and.at.most(1000000020);