import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';
var getRandomCharacter = uniqueRandomArray(starWarsNames);

function random(number) {
  if (number === undefined) {
    return getRandomCharacter();
  } else {
    var randomCharacters = [];
    for (var i = 0; i < number; i++) {
      randomCharacters.push(getRandomCharacter());
    }
    return randomCharacters;
  }
}

module.exports = {
  all: starWarsNames,
  random: random
};