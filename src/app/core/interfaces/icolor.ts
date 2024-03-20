import { Apex } from '../models/apex';

export interface IColor {
  id: number;
  name: string;
  apexes: Apex[];
}
