import { KeyValue } from '@angular/common';
import { divisors, divisorsAsync, isDivisorOf, isEven, isMultipleOf, isOdd, isPrime, isRelativePrimeOf, maximalCommonDivisor } from '../services/utilities/numeric';

export class Integer {

  value = 0;
  divisors: number[] = [];
  isEven = false;
  isOdd = false;
  isPrime = false;

  constructor(value?: number) {
    this.value = value ?? 0;
    this.divisors = [];
    this.isEven = false;
    this.isOdd = false;
    this.isPrime = false;
  }

  get divisorsMap(): KeyValue<string, number>[] {
    const divMap: KeyValue<string, number>[] = [];

    this.divisors.forEach((v, k) => {
      divMap.push({ key: `${k + 1}`, value: v });
    });

    return divMap;
  }

  init = (): void => {
    this.divisors = divisors(this.value);
    this.isEven = isEven(this.value);
    this.isOdd = isOdd(this.value);
    this.isPrime = isPrime(this.divisors);
  }

  isDivisorOf = (b: number): boolean => {
    return isDivisorOf(this.value, b);
  }

  isMultipleOf = (b: number): boolean => {
    return isMultipleOf(this.value, b);
  }

  isRelativePrimeOf = (b: number): boolean => {
    return isRelativePrimeOf(this.divisors, b);
  }

  maximalCommonDivisorOf = (b: number): number => {
    return maximalCommonDivisor(this.divisors, b);
  }
}
