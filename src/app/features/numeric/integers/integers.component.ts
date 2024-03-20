import { Component, OnInit } from '@angular/core';
import { Integer } from '../../../core/models/integer';
import { Series } from '../../../core/models/series';

@Component({
  selector: 'app-integers',
  templateUrl: './integers.component.html',
  styleUrls: ['./integers.component.scss']
})
export class IntegersComponent implements OnInit {

  integers: Integer[] = [];
  series = new Series();

  ngOnInit(): void {

    this.integers = [
      new Integer(23),
      new Integer(),
      new Integer(25),
      new Integer(50),
      new Integer(12)
    ];

    this.series = new Series([
      new Integer(7),
      new Integer(23),
      new Integer(25),
      new Integer(19),
      new Integer(8),
      new Integer(26),
      new Integer(21),
      new Integer(2),
      new Integer(15),
      new Integer(22),
      new Integer(9),
      new Integer(3),
      new Integer(6),
      new Integer(5),
      new Integer(16)
    ]);

    //  console.info('serie', serie.items, serie.hasPrimes, serie.primes, serie.hasRelativePrimes, serie.relativePrimes);
  }
}
