import { Pipe, PipeTransform } from '@angular/core';
import { toReverse } from '../services/utilities/sort.service';

@Pipe({
  name: 'expansion'
})
export class ExpansionPipe implements PipeTransform {

  transform(values: number[], ...args: unknown[]): unknown {
    return toReverse(values).join(' ');
  }

}
