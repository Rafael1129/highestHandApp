var hand = [];
var suits = {'C':0,'D':0,'H':0,'S':0};
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




function convertCards(items){
  for (key in cardValue){    
      for (i = 0; i < items.length; i++){
        if (items[i] == key){
            
            hand.push(cardValue[key])
        }
      }
  }
  
  console.log(hand);
  return hand;
}

function getSuitsCount(items, suits){
    for (i = 0; i < items.length; i++){
       for (suit in suits){
         // console.log(items[i]);
         if (items[i].includes(suit))
         {
            suits[suit] = suits[suit] + 1;
         }
       
        }
      }
      console.log(suits);
      return suits;
}
function highestHand(items){
    if (items.length != 5){
        let error = 'Hand drawn should have five cards'
        console.log(error);
        return error;}
    console.log(items);
    suits = getSuitsCount(items, suits);
    hand = convertCards(items);
    return printHand(hand, suits);
}

function printAssign(handName){
    console.log(handName);
    return handName;
}
function printHand(hand, suits){
    var handName = '';
    if (fiveOfKind(hand)){handName = printAssign('Five of a kind')}
    if (straightFlush(hand)){handName = printAssign('Straight flush')}
    if (fourOfKind(hand)){handName = printAssign('Four of a kind')}
    if (fullHouse(hand)){handName = printAssign('Full house')}
    if (flush(suits)){handName = printAssign('Flush')}
    if (straight(hand)){handName = printAssign('Straight')}
    if (threeOfKind(hand)){handName = printAssign('Three of a kind')}
    if (twoPair(hand)){handName = printAssign('Two pair')}
    if (onePair(hand)){handName = printAssign('One pair')}
    else {handName = printAssign('High card') }
    return handName;
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
        if(hand[i] !== (hand[i+1] - 4)) {
            return false;
        }
    }
    return true;
}

function fourOfKind(hand){
    var count = 0;
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] == hand[i+1]) {
            count++;
        }
    }
    if ( count == 4){ return true;} else {return false;}
}

function fullHouse(hand){
    // 3 values same and other 2 same as each other

}

function flush(suits){
    // all same suit
    for (suit in suits){
        console.log(suits[suit]);
        if (suits[suit] == 5)
        {
            return true;
        }
    }
    return false;
  
}

function straight(hand){
    // sequence
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] !== (hand[i+1] - 1)) {
            return false;
        }
    }
    return true;
}

function threeOfKind(hand){
    var count = 0;
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] == hand[i+1]) {
            count++;
        }
    }
    if ( count == 3){ return true;} else {return false;}
}

function twoPair(hand){
//  2 of same and other 2 of same
  return false;
}

function onePair(hand){
    var count = 0;
    for(var i = 0; i < hand.length - 1; i++) {
        if(hand[i] == hand[i+1]) {
            count++;
        }
    }
    if ( count == 2){ return true;} else {return false;}
}

module.exports = {
    
    highestHand: highestHand
};
