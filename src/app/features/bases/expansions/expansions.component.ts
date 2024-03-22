import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services && Pipes
import { AppService } from '../../../core/services/utilities/app.service';
import { expansion } from '../../../core/services/utilities/numeric';
import { ExpansionPipe } from '../../../core/pipes/expansion.pipe';

@Component({
  selector: 'app-expansions',
  templateUrl: './expansions.component.html',
  styleUrls: ['./expansions.component.scss']
})
export class ExpansionsComponent implements OnInit {

  private expansionPipe = new ExpansionPipe();

  expansions: { n: number, base: number, expOfn: number[] }[] = [];
  expansion: number[] = [];

  controls = {
    number: new FormControl(0, [Validators.required, Validators.min(1)]),
    base: new FormControl(0, [Validators.required, Validators.min(2)]),
    expansion: new FormControl({ value: '', disabled: true })
  };

  form = new FormGroup({ ...this.controls });

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.appService.process.start('Loading...');

    setTimeout(() => {
      this.expansions = [
        { n: 13, base: 2, expOfn: expansion(13, 2) },
        { n: 602, base: 10, expOfn: expansion(602, 10) },
        { n: 602, base: 2, expOfn: expansion(602, 2) }
      ];

      this.appService.process.stop();
    }, 1000);
  }

  onClickCalculate = (): void => {
    if (this.controls.number.valid && this.controls.base.valid) {
      this.appService.process.start('Calculating');

      setTimeout(() => {
        this.expansion = expansion(this.controls.number.value ?? 0, this.controls.base.value ?? 0);
        this.controls.expansion.setValue(`${this.expansionPipe.transform(this.expansion)}`);
        this.appService.process.stop();
      }, 800);
    }
  }
}
