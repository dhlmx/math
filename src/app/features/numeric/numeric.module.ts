import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../core/modules/share/shared.module';
import { NumericRoutingModule } from './numeric-routing.module';
import { IntegersComponent } from './integers/integers.component';


@NgModule({
  declarations: [
    IntegersComponent
  ],
  imports: [
    CommonModule,
    NumericRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class NumericModule { }
