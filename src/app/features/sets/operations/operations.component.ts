import { Component, OnInit } from '@angular/core';
import { complement, intersection, union } from 'src/app/core/services/utilities/numeric';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  u: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  a: number[] = [0, 1, 3, 5, 7, 9];
  b: number[] = [0, 2, 4, 6, 8, 10];

  aub: number[] = [];
  anb: number[] = [];
  ac: number[] = [];
  bc: number[] = [];

  ngOnInit(): void {
    this.aub = union(this.a, this.b);
    this.anb = intersection(this.a, this.b);
    this.ac = complement(this.u, this.a);
    this.bc = complement(this.u, this.b);
  }
}
