import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SetsRoutingModule } from './sets-routing.module';
import { SharedModule } from '../../core/modules/share/shared.module';

// Components
import { OperationsComponent } from './operations/operations.component';

@NgModule({
    declarations: [
        OperationsComponent
    ],
    imports: [
        CommonModule,
        SetsRoutingModule,
        SharedModule
    ]
})
export class SetsModule { }
