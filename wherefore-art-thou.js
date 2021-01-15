function whatIsInAName(collection, source) {
  var arr = [];
  
  // Only change code below this line
   for(let i=0; i<collection.length; i++){
     let myCheck = true;
     for(let prop in source){
      if ((collection[i][prop]) == source[prop]) {
        myCheck = true;
      } else {
        myCheck = false;
        break;
      }
     }
     if(myCheck == true) {
        arr.push(collection[i]);
      }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });