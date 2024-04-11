import { ICombinationByGroup } from '../interfaces/icombination-by-group';
import { factorial } from './calculate';
import { Combination } from './combination';

export class CombinationByGroup {

  elements: string[] = [];
  groups: number[] = [];
  excludeArrangements = false;

  combinations: Combination[] = [];

  constructor(source?: ICombinationByGroup) {
    if (source) {
      this.elements = source.elements;
      this.groups = source.groups;
      this.excludeArrangements = source.excludeArrangements;
    }

    this.groups.forEach((group, index) => {
      if (index !== 0) {
        this.elements = this.elements.slice(0, this.elements.length - this.groups[index - 1]);
      }

      this.combinations.push(
        new Combination({ elements: this.elements, length: group, excludeArrangements: this.excludeArrangements })
      );
    });
  }

  get calculation(): number {
    let combinations = 1;

    this.combinations.forEach(combination => {
      combinations *= combination.calculate();
    });

    return this.excludeArrangements ? combinations / factorial(this.groups.length) : combinations;
  }
}
