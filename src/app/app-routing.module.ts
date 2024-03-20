import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bases',
    pathMatch: 'full'
  },
  {
    path: 'bases',
    loadChildren: () => import('./features/bases/bases.module').then(m => m.BasesModule)
  },
  {
    path: 'combinatorial-analysis',
    loadChildren: () => import('./features/combinatorial-analysis/combinatorial-analysis.module').then(m => m.CombinatorialAnalysisModule)
  },
  {
    path: 'graphs',
    loadChildren: () => import('./features/graphs/graphs.module').then(m => m.GraphsModule)
  },
  {
    path: 'machine-learning',
    loadChildren: () => import('./features/machine-learning/machine-learning.module').then(m => m.MachineLearningModule)
  },
  {
    path: 'numeric',
    loadChildren: () => import('./features/numeric/numeric.module').then(m => m.NumericModule)
  },
  {
    path: 'sets',
    loadChildren: () => import('./features/sets/sets.module').then(m => m.SetsModule)
  },
  {
    path: '**',
    redirectTo: '/bases'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
