import { ICombination } from '../interfaces/icombination';
import { Combination } from './combination';

export class CombinationsGroups {

  groups: Combination[][] = [];

  total = 0;

  constructor(groups?: ICombination[][]) {
    if (groups) {
      this.groups = groups.map(iCombinations => iCombinations.map(iCombination => new Combination(iCombination)));
    }
  }

  calculation =(): void => {
    this.total = 0;

    this.groups.forEach(combinations => {
      let subtotal = 1;

      combinations.forEach(combination => {
        subtotal *= combination.calculate();
      });

      this.total += subtotal;
    })
  }
}
