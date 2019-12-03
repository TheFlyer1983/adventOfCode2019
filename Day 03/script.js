const fs = require('fs');

function loadFile(){
  return new Promise((resolve, reject) => {
    fs.readFile('./input.txt', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

function dayThreePartOne(data){
  const inputArray = data.toString().split('\r\n');
  const lineOne = inputArray[0].split(',');
  const lineTwo = inputArray[1].split(',');
  
}

loadFile()
  .then((data) => {
    // console.log(data.toString().split('\r\n'));
    dayThreePartOne(data);
    // console.log('Day Two Part Two Answer:', dayTwoPartTwo(data));
  })
  .catch((err) =>{
    console.log(err);
  });
