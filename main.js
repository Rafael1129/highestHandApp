const API = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=';
var deckId = "fuck";
const API2 = 'https://deckofcardsapi.com/api/deck/'+deckId+'/draw/?count=';
const COUNT = '1';
var module1 = require('./module1');
var highHand = require('./highHand');


const request = require('request');
module1.shuffle(API+COUNT);
console.log(module1.deckId);
module1.drawFive('8mqj1wyeht2y');
// highHand.highestHand();
// request(API+COUNT, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.remaining);
//   console.log(body.deck_id);
//   deckId = body.deck_id;
//   console.log(deckId);
// });
// request('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count='+COUNT, { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body);
//     console.log(body.deck_id);

//     console.log(deckId);
//   });