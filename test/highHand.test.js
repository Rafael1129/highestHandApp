var assert = require('assert');
var highHand = require('../highHand');
var items = [];

describe('highHand', function() {
  describe('highestHand()', function() {

    it('should throw error when hand does not have five cards', function() {
      items = [ 'KH', '3D', 'JD', 'JS'];
      assert.equal(highHand.highestHand(items),'Hand drawn should have five cards');
    });

    it('should return High card hand', function() {
      items = [ 'JS', 'AD', '5C', '4S', '3D' ];
      assert.equal(highHand.highestHand(items),'High card');
    });

    it('should return One pair hand', function() {
      items = [ 'JS', 'AD', '5C', 'AS', '3D' ];
      assert.equal(highHand.highestHand(items),'One pair');
    });

    it('should return Two pair hand', function() {
      items = [ 'JS', 'AD', 'AC', '4S', '4D' ];
      assert.equal(highHand.highestHand(items),'Two pair');
    });

    it('should return Three of a kind hand', function() {
      items = [ 'JS', 'JD', 'JC', '4S', '3D' ];
      assert.equal(highHand.highestHand(items),'Three of a kind');
    });

    it('should return Straight hand', function() {
      items = [ '2S', '3D', '4C', '5S', '6D' ];
      assert.equal(highHand.highestHand(items),'Straight');
    });

    it('should return Flush hand', function() {
      items = [ 'JD', 'AD', '5D', '4D', '3D' ];
      assert.equal(highHand.highestHand(items),'Flush');
    });

    it('should return Full house hand', function() {
      items = [ 'JS', 'JD', 'JC', '4S', '4D' ];
      assert.equal(highHand.highestHand(items),'Full house');
    });

    it('should return Four of a kind hand', function() {
      items = [ 'JS', 'JD', 'JC', 'JS', '3D' ];
      assert.equal(highHand.highestHand(items),'Four of a kind');
    });

    it('should return Straight flush hand', function() {
      items = [ '2S', '3S', '4S', '5S', '6S' ];
      assert.equal(highHand.highestHand(items),'Straight flush');
    });

    it('should return Five of a kind hand', function() {
      items = [ 'AD', 'AD', 'AD', 'AD', 'AD' ];
      assert.equal(highHand.highestHand(items),'Five of a kind');
    });
  });
  describe('convertCards()', function() {
    var items = [ 'JS', 'AD', '5C', '4S', '3D' ];
    var converted_cards = [ 6, 12, 13, 40, 50 ];
    it('should convert hand to numbers', function() {

      assert.equal(highHand.convertCards(items),converted_cards);
    });
  });
  describe('getSuitsCount()', function() {
    var items = [ '2S', '4S', 'JH', 'KS', 'QS' ];
    var suits_count = { 'C': 0, 'D': 0, 'H': 1, 'S': 4 }
    it('should return the count of each suit', function() {

      assert.equal(highHand.getSuitsCount(items),suits_count);
    });
  });
});
