import { Apex } from './apex';
import { Color } from './color';
import { Edge } from './edge';

export class Graph {
  apexes: Apex[] = [];
  colors: Color[]= [];
  edges: Edge[] = [];

  defineColor = (): void => {
    this.colors.forEach(color => {
      if (color.id === 1) {
        color.name = 'Rojo';
      } else if (color.id === 2) {
        color.name = 'Morado';
      } else if (color.id === 3) {
        color.name = 'Amarillo';
      } else if (color.id === 4) {
        color.name = 'Verde';
      } else if (color.id === 5) {
        color.name = 'Naranja';
      }
    });
  }
}


