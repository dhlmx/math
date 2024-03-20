export const distance = (a: number[], b: number[]): number => {
  if (a.length === 0 || b.length === 0) {
    throw new Error('Points a and b must have a length greater than zero');
  }

  if (a.length !== b.length) {
    throw new Error('Points a and b must be the same length');
  }

  return Math.sqrt(
    a.map((aPoint, index) => (b[index] - aPoint))
    .reduce((sumOfSquares, diff) => sumOfSquares + Math.pow(diff, 2), 0)
  );
},

factorial = (nFactorial: number): number => {
  if (nFactorial === 0 || nFactorial === 1) {
    return 1;
  }

  let iterator = nFactorial, total = 1;

  while (iterator > 1) {
    total = total * iterator;
    iterator--;
  }

  return total;
},

mean = (numbers: number[]): number => {
  if (numbers.length === 0) {
    return 0;
  }

  return sum(numbers) / numbers.length;
},

sum = (numbers: number[]): number => {
  return numbers.reduce((sum, val) => sum + val, 0);
};
