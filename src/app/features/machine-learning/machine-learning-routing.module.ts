import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KMeansComponent } from './k-means/k-means.component';

const routes: Routes = [
  { path: '', redirectTo: 'k-means', pathMatch: 'full' },
  { path: 'k-means', component: KMeansComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineLearningRoutingModule { }
