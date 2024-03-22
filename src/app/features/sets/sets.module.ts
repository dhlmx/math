import { NgModule } from '@angular/core';

// Modules
import { SetsRoutingModule } from './sets-routing.module';
import { SharedModule } from '../../core/modules/share/shared.module';

// Components
import { OperationsComponent } from './operations/operations.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [
        OperationsComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        SetsRoutingModule
    ]
})
export class SetsModule { }
