import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { AppService } from '../../../core/services/utilities/app.service';
import { complement, intersection, union } from '../../../core/services/utilities/numeric';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  universe: number[] = [];
  setA: number[] = [];
  setB: number[] = [];

  aub: number[] = [];
  anb: number[] = [];
  ac: number[] = [];
  bc: number[] = [];

  controls = {
    universe: new FormControl('', [Validators.required]),
    setA: new FormControl('', [Validators.required]),
    setB: new FormControl('', [Validators.required])
  };

  form = new FormGroup({ ...this.controls });

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.appService.process.start('Loading...');

    setTimeout(() => {
      this.appService.process.stop();
    }, 1000);
  }

  onClickCalculate = (): void => {
    this.appService.process.start('Calculating...');

    setTimeout(() => {
      const universe = JSON.stringify(this.controls.universe.value),
      setA = JSON.stringify(this.controls.setA.value),
      setB = JSON.stringify(this.controls.setB.value);

      this.universe = Array(JSON.parse(universe));
      this.setA = Array(JSON.parse(setA));
      this.setB = Array(JSON.parse(setB));

      this.aub = union(this.setA, this.setB);
      this.anb = intersection(this.setA, this.setB);
      this.ac = complement(this.universe, this.setA);
      this.bc = complement(this.universe, this.setB);

      this.appService.process.stop();
    }, 1000);
  }
}
