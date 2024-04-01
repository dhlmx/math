import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { SharedModule } from '../../core/modules/share/shared.module';
import { ColorComponent } from './color/color.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class GraphsModule { }
