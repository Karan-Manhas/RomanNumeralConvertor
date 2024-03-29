// Convert given number into roman numeral
// all roman numerals should be uppercase

function convertToRoman(num) {
  var romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var str = '';

  for (var i of Object.keys(romanNum)) {
    var q = Math.floor(num / romanNum[i]);
    num -= q * romanNum[i];
    str += i.repeat(q);
  }

  return str;
}
