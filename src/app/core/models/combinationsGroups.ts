import { ICombination } from '../interfaces/icombination';
import { Combination } from './combination';

export class CombinationsGroups {

  groups: Combination[][] = [];

  constructor(groups?: ICombination[][]) {
    if (groups) {
      this.groups = groups.map(iCombinations => iCombinations.map(iCombination => new Combination(iCombination)));
    }
  }

  get calculation(): number {
    let total = 0;

    this.groups.forEach(combinations => {
      let subtotal = 1;

      combinations.forEach(combination => {
        subtotal *= combination.calculation;
      });

      total += subtotal;
    })

    return total;
  }
}
