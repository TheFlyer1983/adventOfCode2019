const fs = require('fs');

function loadFile(){
  return new Promise((resolve, reject) => {
    fs.readFile('./input.txt', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

function dayTwoPartOne(data, replacement1, replacement2){

    const intCode = data.toString();
    const intCodeArray = intCode.split(',').map(Number);
    intCodeArray.splice(1, 1, replacement1);
    intCodeArray.splice(2, 1, replacement2);

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
    const answer = intCodeArray[0];

    return answer;
}

function dayTwoPartTwo(data){
  let answer = 0;

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const result = dayTwoPartOne(data, noun, verb);
      if (result === 19690720) {
        answer = 100 * noun + verb;
        return answer;
      }
    }
  }
}


loadFile()
  .then((data) => {
    console.log('Day Two Part One Answer:', dayTwoPartOne(data, 12,2));
    console.log('Day Two Part Two Answer:', dayTwoPartTwo(data));
  });
