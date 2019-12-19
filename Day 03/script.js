const fs = require('fs');

function loadFile(){
  return new Promise((resolve, reject) => {
    fs.readFile('./input.txt', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

function dayThreePartOne(data){
  const inputArray = data.toString().split('\n');
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
      for (let j = 0; j <= Number(lineOne[i].substr(1)); j++) {
        if (j === 0) {
          coords.y = coords.y;
        } else {
          coords.y = coords.y + 1;
          journeyOne.push({...coords});  
        }
      }
    } else if (lineOne[i].substr(0, 1) === 'L') {
      for (let j = Number(lineOne[i].substr(1)); j > 0; j--) {
        coords.y = coords.y - 1;
        journeyOne.push({...coords});   
      }
    } else if (lineOne[i].substr(0, 1) === 'U') {
      for (let j = 0; j <= Number(lineOne[i].substr(1)); j++) {
        if (j === 0) {
          coords.x = coords.x;
        } else {
          coords.x = coords.x + 1;
          journeyOne.push({...coords});
        }
      }
    } else if (lineOne[i].substr(0, 1) === 'D') {
      for (let j = Number(lineOne[i].substr(1)); j > 0; j--) {
        coords.x = coords.x - 1;
        journeyOne.push({...coords});  
      }
    } else {
      console.log(`You have encountered an error!\nThe First character of the instruction isn't one of the letters R, L, U or D.`);
      break;
    }
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
    } else if (lineTwo[i].substr(0, 1) === 'L') {
      for (let j = Number(lineTwo[i].substr(1)); j > 0; j--) {
        coords.y = coords.y - 1;
        journeyTwo.push({...coords}); 
      }
    } else if (lineTwo[i].substr(0, 1) === 'U') {
      for (let j = 0; j <= Number(lineTwo[i].substr(1)); j++) {
        if (j === 0) {
          coords.x = coords.x;
        } else {
          coords.x = coords.x + 1;
          journeyTwo.push({...coords});  
        }        
      }
    } else if (lineTwo[i].substr(0, 1) === 'D') {
      for (let j = Number(lineTwo[i].substr(1)); j > 0; j--) {
        coords.x = coords.x - 1;
        journeyTwo.push({...coords});
      }
    } else {
      console.log(`You have encountered an error!\nThe First character of the instruction isn't one of the letters R, L, U or D.`);
      break;
    }
  }

  journeyOne.forEach((e, count) => {
    journeyTwo.forEach((i) => {
      let matchOne = Object.is(e.x, i.x);
      let matchTwo = Object.is(e.y, i.y);
      if ((matchOne === true) && (matchTwo === true)) {
        if (i.x < 0) {
          i.x = i.x * -1;
        }
        if (i.y < 0) {
          i.y = i.y * -1;
        }
        crossingPoints.push(i.x + i.y);
      }
      return crossingPoints;
    })
  })
  
  const answer = sort(crossingPoints);
  return answer[0];
}

function sort(arr) {
  const sorted = [...arr];
  sorted.sort((a,b) => a > b ? 1 : -1)
  return sorted;
}

loadFile()
  .then((data) => {
    // console.log(data.toString().split('\r\n'));
    console.log('Day Three Part One Answer: ',dayThreePartOne(data));
    // console.log('Day Two Part Two Answer:', dayTwoPartTwo(data));
  })
  .catch((err) =>{
    console.log(err);
  });

  // console.log(dayThreePartOne());