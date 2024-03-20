import { IDimensionRange } from '../interfaces/idimension-range';

export class KMeans {

  k = 0;
  data: number[][] = [];
  iterations = 0;
  centroids: any[] = [];
  centroidAssignments: any = [];
  logs: any[] = [];
  error: any = null;

  constructor(k: number, data: any[]) {
    this.k = k;
    this.data = data;
    this.reset();
  }

  private getAllDimensionRanges = (): IDimensionRange[] => {
    const dimensionRanges: IDimensionRange[] = [];

    this.data.forEach((numbers, index) => {
      dimensionRanges.push(this.getDimensionRange(index));
    });

    return dimensionRanges;
  }

  private getDimensionality = (): number => {
    return this.data[0].length;
  }

  private getDimensionRange = (index: number): IDimensionRange => {
    const values = this.data.map(points => points[index]);

    return {
      min: Math.min.apply(null, values),
      max: Math.max.apply(null, values)
    };
  }

  private initRandomCentroids = (): any[] => {
    const dimensionality = this.getDimensionality(),
        dimensionRanges = this.getAllDimensionRanges(),
        centroids: any[] = [];

    for (let index = 0; index < this.k; index++) {
      let points = [];

      for (let dimension  = 0; dimension < dimensionality; dimension++) {
        const range = dimensionRanges[dimension];
        points.push(range.min + (Math.random() * (range.max - range.min)));
      }

      centroids.push(points);
    }

    return centroids;
  }

  private reset = (): void => {
    this.error = null;
    this.iterations = 0;
    this.logs = [];
    this.centroids = this.initRandomCentroids();
    this.centroidAssignments = [];
  }
}
