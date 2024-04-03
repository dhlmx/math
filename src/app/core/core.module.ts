import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { D3BarsComponent } from './components/d3-bars/d3-bars.component';
import { D3PieComponent } from './components/d3-pie/d3-pie.component';
import { D3TreeComponent } from './components/d3-tree/d3-tree.component';
import { D3TidyTreeComponent } from './components/d3-tidy-tree/d3-tidy-tree.component';
import { D3RadialTreeComponent } from './components/d3-radial-tree/d3-radial-tree.component';

// Components & Pipes

@NgModule({
  declarations: [
    MessageModalComponent,
    D3BarsComponent,
    D3PieComponent,
    D3TreeComponent,
    D3TidyTreeComponent,
    D3RadialTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    PrimeNgModule,
    MessageModalComponent,
    D3BarsComponent,
    D3PieComponent,
    D3TreeComponent,
    D3TidyTreeComponent,
    D3RadialTreeComponent
  ]
})
export class CoreModule { }
