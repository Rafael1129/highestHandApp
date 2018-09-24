var hand = [];
var cardValue = {
'2C': 1,
'2D': 2,
'2H': 3,
'2S': 4,
'3C': 5,
'3D': 6,
'3H': 7,
'3S': 8,
'4C': 9,
'4D': 10,
'4H': 11,
'4S': 12,
'5C': 13,
'5D': 14,
'5H': 15,
'5S': 16,
'6C': 17,
'6D': 18,
'6H': 19,
'6S': 20,
'7C': 21,
'7D': 22,
'7H': 23,
'7S': 24,
'8C': 25,
'8D': 26,
'8H': 27,
'8S': 28,
'9C': 29,
'9D': 30,
'9H': 31,
'9S': 32,
'0C': 33,
'0D': 34,
'0H': 35,
'0S': 36,
'JC': 37,
'JD': 38,
'JH': 39,
'JS': 40,
'QC': 41,
'QD': 42,
'QH': 43,
'QS': 44,
'KC': 45,
'KD': 46,
'KH': 47,
'KS': 48,
'AC': 49,
'AD': 50,
'AH': 51,
'AS': 52};

function convertCards(items, cardValue, hand){
  for (key in cardValue){
      //console.log(cardValue[key]);
     
      for (i = 0; i < items.length; i++){
        // console.log(items[i]);
        if (items[i] == key){
            console.log(cardValue[key]);
            hand.push(cardValue[key])
        }
      }
  }
//   cardValue.forEach(function (key){
//     for (card in items){
//                 if (card == key){
//                     hand.push(value)
//                 }}
//   });
  console.log(hand);
  return hand;
}
function highestHand(items){
    console.log("Hang in there :)");
    console.log(items);
    hand = convertCards(items, cardValue, hand);
}

function printHand(hand){
   
}

function fiveOfKind(hand) {
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] !== hand[i+1]) {
            return false;
        }
    }
    return true;
}

function straightFlush(hand) {

    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] !== (hand[i+1] - 1)) {
            return false;
        }
    }
    return true;
}

function fourOfKind(hand){
    //var count = 0;
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] == hand[i+1]) {
            count++;
        }
    }
    if ( count == 4){ return true;} else {return false;}
}

function fullHouse(hand){

}

function flush(hand){

}

function straight(hand){
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] !== (hand[i+1] - 1)) {
            return false;
        }
    }
    return true;
}

function threeOfKind(hand){
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] == hand[i+1]) {
            count++;
        }
    }
    if ( count == 3){ return true;} else {return false;}
}

function twoPair(hand){

}

function onePair(hand){

}

module.exports = {
    
    highestHand: highestHand
};