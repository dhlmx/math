import { NgModule } from '@angular/core';

// Pipes
import { ExpansionPipe } from '../../pipes/expansion.pipe';
import { SetPipe } from '../../pipes/set.pipe';

@NgModule({
  declarations: [
    ExpansionPipe,
    SetPipe
  ],
  imports: [
  ],
  exports: [
    ExpansionPipe,
    SetPipe
  ]
})
export class SharedModule { }
