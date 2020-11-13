import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploPipePuroImpuroComponent } from './exemplo-pipe-puro-impuro/exemplo-pipe-puro-impuro.component';
import { ExemploPipePuroComponent } from './exemplo-pipe-puro/exemplo-pipe-puro.component';
import { ExemploPipeComponent } from './exemplo-pipe/exemplo-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: ExemploPipePuroComponent
  },
  {
    path: 'exemplo-pipe',
    component: ExemploPipeComponent
  },
  {
    path: 'exemplo-pipe-puro',
    component: ExemploPipePuroComponent
  },
  {
    path: 'pipe-puro-impuro',
    component: ExemploPipePuroImpuroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
