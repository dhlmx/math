import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumericRoutingModule } from './numeric-routing.module';
import { IntegersComponent } from './integers/integers.component';


@NgModule({
  declarations: [
    IntegersComponent
  ],
  imports: [
    CommonModule,
    NumericRoutingModule
  ]
})
export class NumericModule { }
