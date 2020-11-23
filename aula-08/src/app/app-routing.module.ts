import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './guards/auth-guard.service';

// import { AlunosComponent } from 'src/app/alunos/alunos.component' ;
// import { AlunoDetalhesComponent } from './views/aluno-detalhes/aluno-detalhes.component';
// import { AlunoCadastrarComponent } from './views/aluno-cadastrar/aluno-cadastrar.component';
// import { AlunoEditarComponent } from './views/aluno-editar/aluno-editar.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: PainelComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
