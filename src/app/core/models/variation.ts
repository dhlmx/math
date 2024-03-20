import { transformToMultipleArray } from "../services/utilities/array.service";
import { sortMultipleArrayOfWords } from "../services/utilities/sort.service";

export class Variation
 {

  series: string[][] = [];

  constructor(series?: string[][]) {
    if (series) {
      this.series = series;
    }
  }

  get calculation(): number {
    let total = 1;

    this.series.forEach(serie => {
      total = total * serie.length;
    });

    return total;
  }

  list = (sort: boolean): string[][] => {
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

    return sort ? sortMultipleArrayOfWords(tmpSeries, false) : tmpSeries;
  }
}
