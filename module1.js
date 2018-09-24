const request = require('request');
var deckId = '';
var EventEmitter = require("events").EventEmitter;
var deck = new EventEmitter();
var highHand = require('./highHand');
var items = {};

function shuffle(API){
  request(API, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }

    deck.body = body;
    deck.emit('update');
    });
}
deck.on('update', function () {
  var deckId = deck.body.deck_id;
  // console.log(deckId);
});
function drawFive(deckId){
  request('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=5', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        body.cards.forEach(function (card) {
           console.log(card.value + ' of ' + card.suit);
           
           if (!card.value in items)
           {
            items[card.value] = new Array();
              items[card.value].push(card.suit);
           }
           else{
              
              items[card.value] = card.suit;
           }
      });
      highHand.highestHand(items);
      // console.log("lets check array!")
      // console.log(items);
       
      });
}

module.exports ={
    
    shuffle: shuffle,

    deckId: deckId,
    drawFive: drawFive
};


