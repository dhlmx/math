import { ICombination } from '../interfaces/icombination';
import { someHasSameElements, transformToMultipleArray } from '../services/utilities/array.service';
import { sortMultipleArrayOfWords } from '../services/utilities/sort.service';
import { factorial } from './calculate';

export class Combination {

  elements: string[] = [];
  length = 0;
  excludeArrangements = false;

  private total = 0;
  private combinations: string[][] = [];

  constructor(source?: ICombination) {
    if (source) {
      this.elements = source.elements;
      this.length = source.length;
      this.excludeArrangements = source.excludeArrangements;
    }

    this.total = 0;
    this.combinations = [];
  }

  calculate = (): number => {
    return this.total;
  }

  private calculation(): void {
    if (this.excludeArrangements) {
      this.total = factorial(this.elements.length) / (factorial(this.length) * factorial(this.elements.length - this.length));
      return;
    }

    // return factorial(this.elements.length) / factorial(this.elements.length - this.length);

    let iterator = this.elements.length;
    this.total = 1;

    while (iterator > (this.elements.length - this.length)) {
      this.total *= iterator;
      iterator--;
    }
  }

  private combine = (): void => {
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

    this.combinations = series;
  }

  init = (): void => {
    this.calculation();
    this.combine();
  }

  public list = (sort: boolean): string[][] => {
    return sort ? sortMultipleArrayOfWords(this.combinations, this.excludeArrangements) : this.combinations;
  }
}
