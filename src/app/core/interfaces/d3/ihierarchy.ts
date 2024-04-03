import { IChild } from './ichild';

export interface IHierarchy {
  children?: IHierarchy[];
  data: IChild;
  depth: number;
  height: number;
  parent: IChild;
}
