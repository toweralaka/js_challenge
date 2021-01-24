function convertHTML(str) {
  let myStr = str.split('');
  for(let i=0; i<myStr.length; i++) {
    switch(myStr[i]) {
      case "&":
        myStr[i] = "&amp;";
        break;
      case "'":
        myStr[i] = "&apos;";
        break;
      case "<":
        myStr[i] = "&lt;";
        break;
      case ">":
        myStr[i] = "&gt;";
        break;
      case "\"":
        myStr[i] = "&quot;";
        break;
    }
  }
  return myStr.join('');
}

console.log(convertHTML("Dolce"));

// // Stack solution
// var mapObj = {cat:"dog",dog:"goat",goat:"cat"};

// var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
// str = str.replace(re, function(matched){
//   return mapObj[matched];
// });
