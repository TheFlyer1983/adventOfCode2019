const fs = require('fs');

function dayTwoPartOne(){
  console.log('Day 2 Part 1');
  fs.readFile('./input.txt', (err, data) => {
    if (err){
      console.log("You have an error! Sorry");
    }
    const intCode = data.toString();
    const intCodeArray = intCode.split(',').map(Number);
    intCodeArray.splice(1, 1, 12);
    intCodeArray.splice(2, 1, 2);

    let valueOne = 0;
    let valueTwo = 0;
    let valueToReplace = 0;

    for (let i = 0; i < intCodeArray.length; i+=4) {
      valueOne = intCodeArray[i+1];
      valueTwo = intCodeArray[i+2];

      if (intCodeArray[i] === 1) {
        valueToReplace = intCodeArray[valueOne] + intCodeArray[valueTwo];
      } else if (intCodeArray[i] === 2){
        valueToReplace = intCodeArray[valueOne] * intCodeArray[valueTwo];
      } else if (intCodeArray[i] === 99){
        break;
      }
      intCodeArray.splice(intCodeArray[i+3], 1, valueToReplace);
    }
    
    console.log('Answer', intCodeArray[0]);
  })
}

dayTwoPartOne();