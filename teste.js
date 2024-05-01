var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i=0; i < lines.length - 1; i+lines[i]+1){
  var numbers = lines[i].split('\n');
  var a = parseInt(numbers[0]);
}

var inputEmArray = []
var tamanhoInput = input.length
console.log(tamanhoInput)
var totalLeds = 0;
for (i = 0; i <= tamanhoInput; i++) {
  inputEmArray.push(input.charAt(i))

  switch (inputEmArray[i]) {

    case '0':
      totalLeds = totalLeds + 6
      break;

    case '1':
      totalLeds = totalLeds + 2
      break;

    case '2':
      totalLeds = totalLeds + 5
      break;

    case '3':
      totalLeds = totalLeds + 5
      break;

    case '4':
      totalLeds = totalLeds + 4
      break;

    case '5':
      totalLeds = totalLeds + 5
      break;

    case '6':
      totalLeds = totalLeds + 6
      break;

    case '7':
      totalLeds = totalLeds + 3
      break;

    case '8':
      totalLeds = totalLeds + 7
      break;

    case '9':
      totalLeds = totalLeds + 6
      break;
    default:
  }
}