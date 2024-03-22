import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinatorialAnalysisRoutingModule } from './combinatorial-analysis-routing.module';
import { CombinationsComponent } from './combinations/combinations.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    CombinationsComponent
  ],
  imports: [
    CommonModule,
    CombinatorialAnalysisRoutingModule,
    CoreModule
  ]
})
export class CombinatorialAnalysisModule { }
