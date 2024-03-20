import { ICombination } from '../interfaces/icombination';
import { Combination } from './combination';

export class CombinationsGroup {
  combinations: Combination[] = [];

  constructor(combinations?: ICombination[]) {
    if (combinations) {
      this.combinations = combinations.map(iCombination => new Combination(iCombination));
    }
  }

  get calculation(): number {
    let combinations = 1;

    this.combinations.forEach(combination => {
      combinations *= combination.calculation;
    });

    return combinations;
  }
}
