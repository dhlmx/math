import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { AppService } from 'src/app/core/services/utilities/app.service';

// Models
import { Integer } from '../../../core/models/integer';
import { Series } from '../../../core/models/series';
import { PdfService } from 'src/app/core/services/pdf.service';

@Component({
  selector: 'app-integers',
  templateUrl: './integers.component.html',
  styleUrls: ['./integers.component.scss']
})
export class IntegersComponent implements OnInit {

  integer = new Integer();
  integers: Integer[] = [];
  series = new Series();
  data: KeyValue<string, number>[] = [];

  controls = {
    number: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(this.maximalSafeNumber)]),
    multipleOf: new FormControl(0, [Validators.max(this.maximalSafeNumber)]),
    divisorOf: new FormControl(0, [Validators.max(this.maximalSafeNumber)])
  };

  get maximalNumber(): number {
    return Number.MAX_VALUE;
  }

  get maximalSafeNumber(): number {
    return Number.MAX_SAFE_INTEGER;
  }

  search = new FormControl('');

  form = new FormGroup({ ...this.controls });

  constructor(
    public appService: AppService,
    public pdfService: PdfService
  ) {
  }

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
      this.data = this.integer.divisorsMap;
      this.form.reset();
      this.appService.process.stop();
    }, 200);
  }

  onClickPrint = (): void => {
    this.appService.process.start('Printing...');

    this.pdfService.exportPDF('htmlContent', 'resultados').subscribe({
      next: (status) => {
        console.info('exportPDF', status);
      },
      error: (e) => {
        console.info('exportPDF:ERROR', e);
      },
      complete: () => {
        this.appService.process.stop();
      }
    });
  }

}
