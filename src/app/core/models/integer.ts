import { divisors, isDivisorOf, isEven, isMultipleOf, isOdd, isPrime, isRelativePrimeOf, maximalCommonDivisor } from '../services/utilities/numeric';

export class Integer {

  value = 0;

  constructor(value?: number) {
    this.value = value ?? 0;
  }

  get divisors(): number[] {
    return divisors(this.value);
  }

  get isEven(): boolean {
    return isEven(this.value);
  }

  get isOdd(): boolean {
    return isOdd(this.value);
  }

  get isPrime(): boolean {
    return isPrime(this.value);
  }

  isDivisorOf = (b: number): boolean => {
    return isDivisorOf(this.value, b);
  }

  isMultipleOf = (b: number): boolean => {
    return isMultipleOf(this.value, b);
  }

  isRelativePrimeOf = (b: number): boolean => {
    return isRelativePrimeOf(this.value, b);
  }

  maximalCommonDivisorOf = (b: number): number => {
    return maximalCommonDivisor(this.value, b);
  }
}
