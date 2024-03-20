import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineLearningRoutingModule } from './machine-learning-routing.module';
import { SharedModule } from '../../core/modules/share/shared.module';
import { KMeansComponent } from './k-means/k-means.component';

@NgModule({
  declarations: [
    KMeansComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MachineLearningRoutingModule
  ]
})
export class MachineLearningModule { }
