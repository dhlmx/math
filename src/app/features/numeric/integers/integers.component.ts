import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { AppService } from 'src/app/core/services/utilities/app.service';

// Models
import { Integer } from '../../../core/models/integer';
import { Series } from '../../../core/models/series';
import { divisors, isEven, isOdd, isPrime } from 'src/app/core/services/utilities/numeric';

@Component({
  selector: 'app-integers',
  templateUrl: './integers.component.html',
  styleUrls: ['./integers.component.scss']
})
export class IntegersComponent implements OnInit {

  integer = new Integer();
  integers: Integer[] = [];
  series = new Series();

  controls = {
    number: new FormControl(0, [Validators.required, Validators.min(1)]),
    multipleOf: new FormControl(0),
    divisorOf: new FormControl(0)
  };

  search = new FormControl('');

  form = new FormGroup({ ...this.controls });

  constructor(public appService: AppService) {
  }

  // ngDoCheck(): void {
  //   if (this.appService.process.processingMode) {
  //     console.log('Processing...');

  //     if (this.integer.divisors.length > 0) {
  //       console.log('Checking->STOP...');
  //       // this.appService.process.stop();
  //     }
  //   } else {
  //     console.log('IDLE...');
  //   }
  // }

  ngOnInit(): void {
    this.appService.process.start('Loading...');

    setTimeout(() => {
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

      this.appService.process.stop();
    }, 1000);
  }

  onClickCalculate = (): void => {
    this.appService.process.start('Calculating...');
    this.integers = [];

    setTimeout(() => {
      this.integer = new Integer(this.controls.number.value!);
      this.integer.init();
      this.integers = [this.integer];
      this.form.reset();
      this.appService.process.stop();
    }, 200);
  }
}
