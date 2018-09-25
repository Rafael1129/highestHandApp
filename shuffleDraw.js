const request = require('request');
var deck_id = '';
var EventEmitter = require("events").EventEmitter;
var deck = new EventEmitter();
var highHand = require('./highHand');
var items = [];

function shuffle(API){
  request(API, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }

    deck.body = body;
    deck.emit('shuffled');
    });
}
deck.on('shuffled', function () {
  deck_id = deck.body.deck_id;
  deck.emit('ready_to_draw');
  return deck_id;
});
function drawCards(CARD_COUNT){
  deck.on('ready_to_draw', function () {
  request('https://deckofcardsapi.com/api/deck/' + deck_id + '/draw/?count=' + CARD_COUNT, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        body.cards.forEach(function (card) {
          console.log(card.value + ' of ' + card.suit);
          items.push(card.code);
      });
      highHand.highestHand(items);

      });
    });
}

module.exports ={
    
    shuffle: shuffle,
    drawCards: drawCards
};


