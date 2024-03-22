import { NgModule } from '@angular/core';

import { BasesRoutingModule } from './bases-routing.module';
import { ExpansionsComponent } from './expansions/expansions.component';
import { SharedModule } from '../../core/modules/share/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ExpansionsComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BasesRoutingModule
  ]
})
export class BasesModule { }
