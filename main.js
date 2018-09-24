const API = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=';
var deckId = "fuck";
const API2 = 'https://deckofcardsapi.com/api/deck/'+deckId+'/draw/?count=';
const COUNT = '1';
var drawCards = require('./drawCards');
var highHand = require('./highHand');


const request = require('request');
drawCards.shuffle(API+COUNT);
console.log(drawCards.deckId);
drawCards.drawFive();
