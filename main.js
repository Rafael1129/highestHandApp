// Entry point for Highest hand app
// for instructions, please see README.md
const API = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=';
const DECK_COUNT = '6';
const CARD_COUNT = '5';
var shuffleDraw = require('./shuffleDraw');

shuffleDraw.shuffle(API+DECK_COUNT);
console.log('Your cards are:');
shuffleDraw.drawCards(CARD_COUNT);
