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
  // const lineOne = ['R8','U5','L5','D3']; //Sample JourneyOne
  // const lineTwo = ['U7','R6','D4','L4']; //Sample JourneyTwo
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
        if (j === 0) {
          coords.y = coords.y;
        } else {
          coords.y = coords.y + 1;
          journeyOne.push({...coords});  
        }
        // journeyOne.push(coords.x + coords.y);
        
      }
      // journeyOne.push(coords.x + coords.y);
    } else if (lineOne[i].substr(0, 1) === 'L') {
      // coords.y = coords.y - Number(lineOne[i].substr(1));
      for (let j = Number(lineOne[i].substr(1)); j > 0; j--) {
        coords.y = coords.y - 1;
        // journeyOne.push(coords.x + coords.y);
        journeyOne.push({...coords});   
      }
      // journeyOne.push(coords.x + coords.y);
    } else if (lineOne[i].substr(0, 1) === 'U') {
      // coords.x = coords.x + Number(lineOne[i].substr(1));
      for (let j = 0; j <= Number(lineOne[i].substr(1)); j++) {
        if (j === 0) {
          coords.x = coords.x;
        } else {
          coords.x = coords.x + 1;
          journeyOne.push({...coords});
        }
        // journeyOne.push(coords.x + coords.y);
             
      }
      // journeyOne.push(coords.x + coords.y);
    } else if (lineOne[i].substr(0, 1) === 'D') {
      // coords.x = coords.x - Number(lineOne[i].substr(1));
      for (let j = Number(lineOne[i].substr(1)); j > 0; j--) {
        coords.x = coords.x - 1;
        // journeyOne.push(coords.x + coords.y);
        journeyOne.push({...coords});  
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
      for (let j = 0; j <= Number(lineTwo[i].substr(1)); j++) {
        if (j === 0) {
          coords.y = coords.y;
        } else {
          coords.y = coords.y + 1;
          journeyTwo.push({...coords});  
        }
      }
      // coords.y = coords.y + Number(lineTwo[i].substr(1));
      // journeyTwo.push(coords.x + coords.y);
    } else if (lineTwo[i].substr(0, 1) === 'L') {
      for (let j = Number(lineTwo[i].substr(1)); j > 0; j--) {
        coords.y = coords.y - 1;
        // journeyOne.push(coords.x + coords.y);
        journeyTwo.push({...coords}); 
      }
      // coords.y = coords.y - Number(lineTwo[i].substr(1));
      // journeyTwo.push(coords.x + coords.y);
    } else if (lineTwo[i].substr(0, 1) === 'U') {
      for (let j = 0; j <= Number(lineTwo[i].substr(1)); j++) {
        if (j === 0) {
          coords.x = coords.x;
        } else {
          coords.x = coords.x + 1;
          journeyTwo.push({...coords});  
        }        
      }
      // coords.x = coords.x + Number(lineTwo[i].substr(1));
      // journeyTwo.push(coords.x + coords.y);
    } else if (lineTwo[i].substr(0, 1) === 'D') {
      for (let j = Number(lineTwo[i].substr(1)); j > 0; j--) {
        coords.x = coords.x - 1;
        // journeyOne.push(coords.x + coords.y);
        journeyTwo.push({...coords});
      }
      // coords.x = coords.x - Number(lineTwo[i].substr(1));
      // journeyTwo.push(coords.x + coords.y);
    } else {
      console.log(`You have encountered an error!\nThe First character of the instruction isn't one of the letters R, L, U or D.`);
      break;
    }
    // journeyTwo.push(coords.x + coords.y);
  }

  for (let i = 0; i < journeyOne.length; i++) {
    for (let j = 0; j < journeyTwo.length; j++) {
      // console.log('Journey 1', journeyOne[i]);
      // console.log('Journey 2' ,journeyTwo[j]);
      let matchOne = Object.is(journeyOne[i].x, journeyTwo[j].x);
      let matchTwo = Object.is(journeyOne[i].y, journeyTwo[j].y);
      if ((matchOne === true) && (matchTwo === true)) {
        crossingPoints.push(journeyTwo[j].x + journeyTwo[j].y);
      }
      
    }
  }
  console.log(crossingPoints);
  const answer = sort(crossingPoints);
  return answer[0];
}

function sort(arr) {
  const sorted = [...arr];
  sorted.sort((a,b) => a.ranking > b.ranking ? -1 : 1)
  return sorted;
}

loadFile()
  .then((data) => {
    // console.log(data.toString().split('\r\n'));
    console.log(dayThreePartOne(data));
    // console.log('Day Two Part Two Answer:', dayTwoPartTwo(data));
  })
  .catch((err) =>{
    console.log(err);
  });
