export const complement = (u: number[], a: number[]): number[] => {
  const x: number[] = [];

  u.forEach(ui => {
    if (!a.includes(ui) && !x.includes(ui)) {
      x.push(ui);
    }
  });

  return x;
},

divisors = (a: number): number[] => {
    const divs: number[] = [];

    if (a < 1) {
      return divs;
    }

    divs.push(1);

    for (let i = 2; i <= a; i++) {
      if (a % i === 0) {
        divs.push(i);
      }
    }

    return divs;
},

expansion = (x: number, base: number): number[] => {
  const digits: number[] = [];
  let quotient = 0, dividend = x, remainder = 0;

  do {
    quotient = Math.floor(dividend / base);
    remainder = dividend % base;
    dividend = quotient;
    digits.push(remainder);
  } while (quotient > 0);

  return digits;
},

intersection = (a: number[], b: number[]): number[] => {
  const aub: number[] = [];

  a.forEach(ai => {
    b.forEach(bi => {
      if (ai === bi && !aub.includes(ai)) {
        aub.push(ai);
      }
    });
  });

  return aub;
},

isDivisorOf = (a: number, b: number): boolean => {
  if (a > b) {
    return false;
  }

  const quotient = b / a;
  return (b % (a * quotient)) === 0;
},

isEven = (x: number): boolean => {
  return x % 2 === 0;
},

isMultipleOf = (a: number, b: number): boolean => {
  if (a > b) {
    return false;
  }

  const multiplier = b / a;
  return (b - (a * multiplier)) === 0;
},

isOdd = (x: number): boolean => {
  return x % 2 !== 0;
},

isPrime = (x: number): boolean => {
  const divs = divisors(x);
  return divs.length === 2;
},

isRelativePrimeOf = (a: number, b: number): boolean => {
  return maximalCommonDivisor(a, b) === 1;
},

maximalCommonDivisor = (a: number, b: number): number => {
  const aDivisors = divisors(a),
      bDivisors = divisors(b),
      commonDivisors: number[] = [];

  aDivisors.forEach(aDiv => {
    bDivisors.forEach(bDiv => {
      if (aDiv === bDiv) {
        commonDivisors.push(aDiv);
      }
    });
  });

  return commonDivisors.length > 0 ? commonDivisors[commonDivisors.length - 1] : 0;
},

union = (a: number[], b: number[]): number[] => {
  const aub: number[] = [];

  a.forEach(ai => {
    if (!aub.includes(ai)) {
      aub.push(ai);
    }
  });

  b.forEach(bi => {
    if (!aub.includes(bi)) {
      aub.push(bi);
    }
  });

  return aub;
};

