// Code your solutions in this file
function countDown(startingNumber) {
    let count = startingNumber;
  
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  

function writeCards(names, event) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  