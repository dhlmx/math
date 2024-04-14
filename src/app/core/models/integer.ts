import { KeyValue } from '@angular/common';
import { divisors, isDivisorOf, isEven, isMultipleOf, isOdd, isPrime, isRelativePrimeOf, maximalCommonDivisor, primesSet } from '../services/utilities/numeric';

export class Integer {

  value = 0;
  primes: number[] = [];
  primesSet: number[][] = [];
  isEven = false;
  isOdd = false;
  isPrime = false;

  constructor(value?: number) {
    this.value = value ?? 0;
    this.primes = [];
    this.primesSet = [];
    this.isEven = false;
    this.isOdd = false;
    this.isPrime = false;
  }

  get divisorsMap(): KeyValue<string, number>[] {
    const divMap: KeyValue<string, number>[] = [];

    this.primes.forEach((v, k) => {
      divMap.push({ key: `${k + 1}`, value: v });
    });

    return divMap;
  }

  getPrimeSet = (): void => {
    let isCompleted = false;

    while (!isCompleted) {
      const sets: number[] = [];
      let total = 1;

      this.primes.forEach((prime, index) => {
        sets.push(prime);
        total *= prime;

        if (total === this.value) {
          if (index === this.primes.length - 1) {
            isCompleted = true;
          }
          return;
        }
      });
    }
  }

  init = (): void => {
    this.primes = divisors(this.value);
    this.primesSet = primesSet(this.primes);
    this.isEven = isEven(this.value);
    this.isOdd = isOdd(this.value);
    this.isPrime = isPrime(this.primes);
  }

  isDivisorOf = (b: number): boolean => {
    return isDivisorOf(this.value, b);
  }

  isMultipleOf = (b: number): boolean => {
    return isMultipleOf(this.value, b);
  }

  isRelativePrimeOf = (b: number): boolean => {
    return isRelativePrimeOf(this.primes, b);
  }

  maximalCommonDivisorOf = (b: number): number => {
    return maximalCommonDivisor(this.primes, b);
  }
}
