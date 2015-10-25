'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _starwarsNamesJson = require('./starwars-names.json');

var _starwarsNamesJson2 = _interopRequireDefault(_starwarsNamesJson);

var getRandomCharacter = (0, _uniqueRandomArray2['default'])(_starwarsNamesJson2['default']);

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
  all: _starwarsNamesJson2['default'],
  random: random
};
