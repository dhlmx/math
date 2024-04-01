import { ICoordinate } from "./icoordinate";

export interface INode {
  source: ICoordinate;
  target: ICoordinate;
  type: string;
}
