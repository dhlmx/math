import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegersComponent } from './integers/integers.component';

const routes: Routes = [
  { path: '', redirectTo: 'integers', pathMatch: 'full' },
  { path: 'integers', component: IntegersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumericRoutingModule { }
