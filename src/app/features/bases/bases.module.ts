import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasesRoutingModule } from './bases-routing.module';
import { ExpansionsComponent } from './expansions/expansions.component';
import { SharedModule } from '../../core/modules/share/shared.module';

@NgModule({
  declarations: [
    ExpansionsComponent,
  ],
  imports: [
    CommonModule,
    BasesRoutingModule,
    SharedModule
  ]
})
export class BasesModule { }
