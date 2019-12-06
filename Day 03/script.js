const fs = require('fs');

function loadFile(){
  return new Promise((resolve, reject) => {
    fs.readFile('./Day 03/input.txt', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

function dayThreePartOne(data){
  // const inputArray = data.toString().split('\r\n');
  // const lineOne = inputArray[0].split(',');
  // const lineTwo = inputArray[1].split(',');
  const lineOne = ['R8','U5','L5','D3']; //Sample JourneyOne
  const lineTwo = ['U7','R6','D4','L4']; //Sample JourneyTwo
  // const lineOne = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']; //Sample JourneyOne
  // const lineTwo = ['U62','R66','U55','R34','D71','R55','D58','R83']; //Sample JourneyTwo
  let journeyOne = [];
  let journeyTwo = [];
  let crossingPoints = [];
  
  const coords = {
    'x' : 0,
    'y' : 0
  }

  for (let i = 0; i < lineOne.length; i++) {
    if (lineOne[i].substr(0, 1) === 'R') {
      // coords.y = coords.y + Number(lineOne[i].substr(1));
      for (let j = 0; j <= Number(lineOne[i].substr(1)); j++) {
        coords.y = j;
        journeyOne.push(coords.x + coords.y); 
      }
      // journeyOne.push(coords.x + coords.y);
    } else if (lineOne[i].substr(0, 1) === 'L') {
      // coords.y = coords.y - Number(lineOne[i].substr(1));
      for (let j = Number(lineOne[i].substr(1)); j >= 0; j--) {
        coords.y = j;
        journeyOne.push(coords.x + coords.y);    
      }
      // journeyOne.push(coords.x + coords.y);
    } else if (lineOne[i].substr(0, 1) === 'U') {
      // coords.x = coords.x + Number(lineOne[i].substr(1));
      for (let j = 0; j <= Number(lineOne[i].substr(1)); j++) {
        coords.x = j;
        journeyOne.push(coords.x + coords.y);   
      }
      // journeyOne.push(coords.x + coords.y);
    } else if (lineOne[i].substr(0, 1) === 'D') {
      // coords.x = coords.x - Number(lineOne[i].substr(1));
      for (let j = Number(lineOne[i].substr(1)); j >= 0; j--) {
        coords.x = j;
        journeyOne.push(coords.x + coords.y);  
      }
      // journeyOne.push(coords.x + coords.y);
    } else {
      console.log(`You have encountered an error!\nThe First character of the instruction isn't one of the letters R, L, U or D.`);
      break;
    }
    // journeyOne.push(coords.x + coords.y);
  }

  coords.x = 0;
  coords.y = 0;

  for (let i = 0; i < lineTwo.length; i++) {
    if (lineTwo[i].substr(0, 1) === 'R') {
      coords.y = coords.y + Number(lineTwo[i].substr(1));
      journeyTwo.push(coords.x + coords.y);
    } else if (lineTwo[i].substr(0, 1) === 'L') {
      coords.y = coords.y - Number(lineTwo[i].substr(1));
      journeyTwo.push(coords.x + coords.y);
    } else if (lineTwo[i].substr(0, 1) === 'U') {
      coords.x = coords.x + Number(lineTwo[i].substr(1));
      journeyTwo.push(coords.x + coords.y);
    } else if (lineTwo[i].substr(0, 1) === 'D') {
      coords.x = coords.x - Number(lineTwo[i].substr(1));
      journeyTwo.push(coords.x + coords.y);
    } else {
      console.log(`You have encountered an error!\nThe First character of the instruction isn't one of the letters R, L, U or D.`);
      break;
    }
    // journeyTwo.push(coords.x + coords.y);
  }

  for (let i = 0; i < journeyOne.length; i++) {
    for (let j = 0; j < journeyTwo.length; j++) {
      if (journeyOne[i] === journeyTwo[j]) {
        crossingPoints.push(journeyTwo[j]);
      }
      
    }
  }
  console.log(crossingPoints);
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
