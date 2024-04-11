import { transformToMultipleArray } from "../services/utilities/array.service";
import { sortMultipleArrayOfWords } from "../services/utilities/sort.service";

export class Variation {

  series: string[][] = [];

  private total = 0;
  private variations: string[][] = [];

  constructor(series?: string[][]) {
    if (series) {
      this.series = series;
    }

    this.total = 0;
    this.variations = [];
  }

  calculate = (): number => {
    return this.total;
  }

  private calculation = (): void => {
    this.total = 1;

    this.series.forEach(serie => {
      this.total = this.total * serie.length;
    });
  }

  private combine = (): void => {
    let tmpSeries: string[][] = [];

    for (const serie of this.series) {
      if (tmpSeries.length === 0) {
        tmpSeries = transformToMultipleArray(serie);
      } else {
        const innerSeries: string[][] = [];

        tmpSeries.forEach(subSerie => {
          for (const element of serie) {
            innerSeries.push(subSerie.concat(element));
          }
        });

        tmpSeries = innerSeries;
      }
    }

    this.variations = tmpSeries;
  }

  init = (): void => {
    this.calculation();
    this.combine();
  }

  list = (sort: boolean): string[][] => {
    return sort ? sortMultipleArrayOfWords(this.variations, false) : this.variations;
  }
}
