import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { MessageModalComponent } from './components/message-modal/message-modal.component';

// Components & Pipes

@NgModule({
  declarations: [
    MessageModalComponent
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
    MessageModalComponent
  ]
})
export class CoreModule { }
