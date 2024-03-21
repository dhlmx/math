import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumericRoutingModule } from './numeric-routing.module';
import { IntegersComponent } from './integers/integers.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    IntegersComponent
  ],
  imports: [
    CommonModule,
    NumericRoutingModule,
    CoreModule
  ]
})
export class NumericModule { }
