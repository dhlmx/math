import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpansionsComponent } from './expansions/expansions.component';

const routes: Routes = [
  { path: '', redirectTo: 'expansions', pathMatch: 'full' },
  { path: 'expansions', component: ExpansionsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasesRoutingModule { }
