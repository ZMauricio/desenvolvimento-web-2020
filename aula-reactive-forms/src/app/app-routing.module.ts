import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoNovoComponent } from './views/aluno-novo/aluno-novo.component';
import { ExemploPipesComponent } from './views/exemplo-pipes/exemplo-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: AlunoNovoComponent
  },
  {
    path: 'aluno-novo',
    component: AlunoNovoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
