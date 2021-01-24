function checkCashRegister(price, cash, cid) {
  let cashArr = [
    [0.01, "PENNY"],
    [0.05, "NICKEL"],
    [0.10, "DIME"],
    [0.25, "QUARTER"],
    [1, "ONE"],
    [5, "FIVE"],
    [10, "TEN"],
    [20, "TWENTY"],
    [100, "ONE HUNDRED"],
  ]
  let change = (cash - price);
  let totCID = cid.reduce((a,b)=> a + b[1], 0)
  let theOutput = {
    status : "OPEN",
    change : [],
  }
  let myChange = []
  console.log(change)
  console.log(totCID)
  
  if(change > totCID) {
    theOutput.status = "INSUFFICIENT_FUNDS";
    myChange = [];
  } else {
    if(change == totCID) {
      theOutput.status = "CLOSED";
      while((change) > 0) {
      for(let i=(cashArr.length)-1; i>=0; i--) {
        let mult = Math.floor((change.toFixed(2))/(cashArr[i][0]))
        // if(mult > 0) {
          let myArr = [(cashArr[i][1]), (mult*(cashArr[i][0]))];
          for(let j=(cid.length-1); j>=0; j--) {
            //if denomination are same
            if(myArr[0] == cid[j][0]) {
              //if change denomination >= cid denomination
              if(myArr[1] >= cid[j][1]) {
                myArr[1] = cid[j][1]
                myChange.unshift(myArr);
                change -= (cid[j][1])
               } else {
                 myChange.push(myArr);
                 change -= (myArr[1])
               }
               if(j == 0 && change > 0) {
                 theOutput.status = "INSUFFICIENT_FUNDS";
                 change = 0
                  myChange = [];
               }
            }
          }
        // }
      }
    }
    } else {
      while((change) > 0) {
        for(let i=(cashArr.length)-1; i>=0; i--) {
          let mult = Math.floor((change.toFixed(2))/(cashArr[i][0]))
          if(mult > 0) {
            let myArr = [(cashArr[i][1]), (mult*(cashArr[i][0]))];
            for(let j=(cid.length-1); j>=0; j--) {
              //if denomination are same
              if(myArr[0] == cid[j][0]) {
                //if change denomination >= cid denomination
                if(myArr[1] >= cid[j][1]) {
                  myArr[1] = cid[j][1]
                  myChange.push(myArr);
                  change -= (cid[j][1])
                } else {
                  myChange.push(myArr);
                  change -= (myArr[1])
                }
                if(j == 0 && change > 0) {
                  theOutput.status = "INSUFFICIENT_FUNDS";
                  change = 0
                    myChange = [];
                }
              }
            }
          }
        }
      }
     }
  }
  theOutput.change = myChange;
  return theOutput
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));