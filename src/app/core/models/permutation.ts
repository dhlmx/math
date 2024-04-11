import { factorial } from './calculate';

export class Permutation {

  elements: any[] = [];

  private permutations: any[][] = [];
  private total = 0;

  constructor(elements?: any[]) {
    if (elements) {
      this.elements = elements;
    }

    this.permutations = [];
    this.total = 0;
  }

  private calculation = (): void => {
    this.total = factorial(this.elements.length);
  }

  calculate = (): number => {
    return this.total;
  }

  private combine = (): void => {
    this.elements.forEach(e => {
      this.elements.forEach(innerE => {
        const innerPermutation: any[] = [];

        if (e !== innerE) {
          innerPermutation.push(...[e, innerE]);

          this.elements.forEach(innerE => {
            if (!innerPermutation.includes(innerE)) {
              innerPermutation.push(innerE);
            }
          });

          this.permutations.push(innerPermutation);
        }
      });
    });

    const reverse = [...this.elements].reverse();

    reverse.forEach(e => {
      reverse.forEach(innerE => {
        const innerPermutation: any[] = [];

        if (e !== innerE) {
          innerPermutation.push(...[e, innerE]);

          reverse.forEach(innerE => {
            if (!innerPermutation.includes(innerE)) {
              innerPermutation.push(innerE);
            }
          });

          this.permutations.push(innerPermutation);
        }
      });
    });
  }

  init = (): void => {
    this.calculation();
    this.combine();
  }

  list = (): string[][] => {
    return this.permutations;
  }
}
