import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationsComponent } from './combinations/combinations.component';

const routes: Routes = [
  { path: '', redirectTo: 'combinations', pathMatch: 'full' },
  { path: 'combinations', component: CombinationsComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinatorialAnalysisRoutingModule { }
