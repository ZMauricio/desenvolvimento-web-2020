import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AlunosComponent } from './views/alunos/alunos.component';
import { AlunoDetalhesComponent } from './views/aluno-detalhes/aluno-detalhes.component';
import { PainelComponent } from './views/painel/painel.component';
import { AlunoCadastrarComponent } from './views/aluno-cadastrar/aluno-cadastrar.component';
import { AlunoEditarComponent } from './views/aluno-editar/aluno-editar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'alunos',
    component: AlunosComponent
  },
  {
    path: 'aluno-novo',
    component: AlunoCadastrarComponent
  },
  {
    path: 'aluno-detalhes/:id',
    component: AlunoDetalhesComponent
  },
  {
    path: 'aluno-editar/:id',
    component: AlunoEditarComponent
  },
  {
    path: 'admin',
    component: PainelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
