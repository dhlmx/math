import { ICombination } from '../interfaces/icombination';
import { someHasSameElements, transformToMultipleArray } from '../services/utilities/array.service';
import { sortMultipleArrayOfWords } from '../services/utilities/sort.service';
import { factorial } from './calculate';

export class Combination {

  elements: string[] = [];
  length = 0;
  excludeArrangements = false;

  constructor(source?: ICombination) {
    if (source) {
      this.elements = source.elements;
      this.length = source.length;
      this.excludeArrangements = source.excludeArrangements;
    }
  }

  get calculation(): number {
    if (this.excludeArrangements) {
      return factorial(this.elements.length) / (factorial(this.length) * factorial(this.elements.length - this.length));
    }

    // return factorial(this.elements.length) / factorial(this.elements.length - this.length);

    let iterator = this.elements.length,
        total = 1;

    while (iterator > (this.elements.length - this.length)) {
      total *= iterator;
      iterator--;
    }

    return total;
  }

  list = (sort: boolean): string[][] => {
    let series = transformToMultipleArray(this.elements),
        iterator = 1;

    while (iterator < this.length) {
      let innerSeries: string[][] = [];

      for (const element of this.elements) {
        series.forEach(subSerie => {
          if (this.excludeArrangements) {
            if (!subSerie.includes(element)
              && !someHasSameElements(innerSeries, subSerie.concat(element))
            ) {
              innerSeries.push(subSerie.concat(element));
            }
          } else if (!subSerie.includes(element)) {
              innerSeries.push(subSerie.concat(element));
          }
        });
      }

      series = innerSeries;
      iterator++;
    }

    return sort ? sortMultipleArrayOfWords(series, this.excludeArrangements) : series;
  }
}
