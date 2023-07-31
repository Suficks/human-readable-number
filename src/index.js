module.exports = function toReadable(number) {
  let str = number.toString();
  let result = '';
  const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  const dozens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const integer = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  if (str.length == 1) {
    return units[number];
  }
  else if (str.length == 2) {
    if (str[0] == 1) {
      result = integer[parseInt(str[1])]
    } else {
      result = dozens[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + units[parseInt(str[1])]) : '');
    }
  }
  else if (str.length == 3) {
    if (str[1] == 1) {
      result = hundreds[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + (integer[parseInt(str[2])])) : '');
    } else {
      result = hundreds[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + (dozens[parseInt(str[1]) - 1])) : '') + ((str[2] != '0') ? (' ' + units[parseInt(str[2])]) : '');
    }
  }

  return result.split('').join('')
}

