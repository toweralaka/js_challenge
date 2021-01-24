function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let periodArray = [];
  for(let i=0; i<arr.length; i++) {
    let myObj = arr[i];
    let bigR = earthRadius + myObj.avgAlt;
    let vel = (GM/bigR)**(1/2);
    let oPeriod = Math.round((2*(Math.PI)*bigR)/vel);
    periodArray.push({name : myObj.name, orbitalPeriod : oPeriod})
  }
  return periodArray;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
