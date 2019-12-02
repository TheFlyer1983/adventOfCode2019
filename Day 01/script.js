const fs = require('fs');

function dayOnePartOne(){
  fs.readFile('./input.txt', (err, data) => {
    if (err){
      console.log("You have an error! Sorry");
    }
    const modules = data.toString();
    const modulesArray = modules.split('\n');
    
    let fuel = 0;

    for (let i = 0; i < modulesArray.length; i++) {
      let divideBy3 = modulesArray[i] / 3;
      let roundDown = Math.floor(divideBy3);
      let subtract2 = roundDown - 2
      fuel = fuel + subtract2;
    }
    console.log('The amount of fuel is:', fuel, '(Day One Part One)');
  })
}

function dayOnePartTwo(){
  fs.readFile('./input.txt', (err, data) => {
    if (err){
      console.log("You have an error! Sorry");
    }
    const modules = data.toString();
    const modulesArray = modules.split('\n');
    
    let fuel = 0;
    for (let i = 0; i < modulesArray.length; i++) {
      let mass = modulesArray[i];
      fuel = fuel + recursionFuel(mass);
      
    }
    console.log('The amount of fuel is:', fuel, '(Day One Part Two)');
  })
}

function recursionFuel(mass){
  let divideBy3 = mass / 3;
  let roundDown = Math.floor(divideBy3);
  let subtract2
  if (roundDown > 0) {

    subtract2 = roundDown - 2;

    if (subtract2 > 0) {
      subtract2 = subtract2 + recursionFuel(subtract2);
    } else {
      subtract2 = 0;
    }
  } else {
    subtract2 = roundDown
  }

  return subtract2;
}

dayOnePartOne();
dayOnePartTwo();