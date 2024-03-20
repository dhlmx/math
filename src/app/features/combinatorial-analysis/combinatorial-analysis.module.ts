import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinatorialAnalysisRoutingModule } from './combinatorial-analysis-routing.module';
import { CombinationsComponent } from './combinations/combinations.component';


@NgModule({
  declarations: [
    CombinationsComponent
  ],
  imports: [
    CommonModule,
    CombinatorialAnalysisRoutingModule
  ]
})
export class CombinatorialAnalysisModule { }
