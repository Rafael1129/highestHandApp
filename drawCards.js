const request = require('request');
var deckId = '';
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
  deckId = deck.body.deck_id;
  deck.emit('ready_to_draw');
  return deckId;
});
function drawFive(){
  deck.on('ready_to_draw', function () {
  request('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=5', { json: true }, (err, res, body) => {
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

    deckId: deckId,
    drawFive: drawFive
};


