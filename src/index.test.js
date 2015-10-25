import {expect} from 'chai';
import starWars from './index';

describe('starwars-names', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain "Vasa"', function () {
      expect(starWars.all).to.include('Vasa');
    });
  });

  describe('random', function () {
    it('should return a random item from the starWars.all', function () {
      var randomCharacter = starWars.random();
      expect(starWars.all).to.include(randomCharacter);
    });

    it('should return an array of random items if passed a number', function () {
      var randomCharacters = starWars.random(3);
      expect(randomCharacters).to.have.length(3);
      randomCharacters.forEach(function (item) {
        expect(starWars.all).to.include(item);
      })
    })
  })
});