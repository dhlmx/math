import { Integer } from './integer';
import { Pair } from './pair';

export class Series {

  items: Integer[] = [];

  constructor(items?: Integer[]) {
    if (items) {
      this.items = items;
    }
  }

  get hasPrimes(): boolean {
    let hasPs = false;

    this.items.forEach(item => {
      if (item.isPrime) {
        hasPs = true;
      }
    });

    return hasPs;
  }

  get hasRelativePrimes(): boolean {
    let hasPRs = false;

    this.items.forEach(item => {
      this.items.forEach(innerItem => {
        if (item.value !== innerItem.value && item.isRelativePrimeOf(innerItem.value)) {
          hasPRs = true;
        }
      });
    });

    return hasPRs;
  }

  get primes(): number[] {
    const ps: number[] = [];

    this.items.forEach(item => {
      if (item.isPrime && ps.findIndex(prime => prime === item.value) === -1) {
        ps.push(item.value);
      }
    });

    return ps;
  }

  get relativePrimes(): Pair[] {
    let pairs: Pair[] = [];

    this.items.forEach(item => {
      this.items.forEach(innerItem => {
        if (item.value !== innerItem.value && item.isRelativePrimeOf(innerItem.value)) {
          if (pairs.findIndex(pair => (pair.a === item.value && pair.b === innerItem.value)
            || (pair.a === innerItem.value && pair.b === item.value)) === -1
          ) {
            pairs.push(new Pair(item.value, innerItem.value));
          }
        }
      });
    });

    return pairs;
  }
}
