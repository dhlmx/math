import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { ExpansionPipe } from '../../pipes/expansion.pipe';
import { SetPipe } from '../../pipes/set.pipe';

@NgModule({
  declarations: [
    ExpansionPipe,
    SetPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ExpansionPipe,
    SetPipe
  ]
})
export class SharedModule { }
