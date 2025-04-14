// Добрый день! свичи мне больше нравятся, решил перевести в них.
// tern1 
let a = Math.floor(Math.random() * 100);
let result;

if ((a > 10 && a > 5) || (a <= 10 && a * 2 > 5)) {
  result = 2 * a + 1;
} else {
  let temp;
  if (a < 3) {
    temp = 1;
  } else {
    temp = 2 * (a - 2);
  }

  switch (true) {
    case temp > 4:
      result = 5;
      break;
    case a % 2 === 0:
      result = 6;
      break;
    default:
      result = 7;
  }
}

console.log(result);

// tern2
function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    let result = '';
  
    switch (true) {
      case a > 10:
        result += 'a is bigger than 10';
        break;
      default:
        result += 'a is less than or equal to 10 ';
        if (a === 5) {
          result += 'an example of a special case';
        }
    }
  
    switch (a) {
      case 15:
        result += 'but a is not 15';
        break;
      default:
        break;
    }
  
    switch (true) {
      case a > 5:
        result += 'and a is greater than 5';
        break;
      default:
        result += 'and a is less than or equal to 5 ';
    }
  
    switch (a % 2) {
      case 0:
        result += ' and a is even ';
        break;
      default:
        result += ' and a is odd';
    }
  
    console.log(result);
    return result;
  }
  
  manyChecks();