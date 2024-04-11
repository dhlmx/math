import { ICombination } from '../interfaces/icombination';
import { Combination } from './combination';

export class CombinationsGroup {

  combinations: Combination[] = [];
  total = 0;

  constructor(combinations?: ICombination[]) {
    if (combinations) {
      this.combinations = combinations.map(iCombination => new Combination(iCombination));
    }
  }

  calculation = (): number => {
    this.total = 1;

    this.combinations.forEach(combination => {
      this.total *= combination.calculate();
    });

    return this.total;
  }
}
