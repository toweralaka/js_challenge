function convertToRoman(num) {
    let romArr = []
//use dictionary object
    let val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
        ]
    let rom = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
        ]
    for(let i=0; i<val.length; i++) {
        if(num>0 && num<5000) {
            let x = Math.floor(num/val[i]);
            if(x > 0) {
                romArr.push((rom[i]).repeat(x));
                num -= (val[i] * x)
            }
        }
    }
 return romArr.join('');
}

console.log(convertToRoman(36));
