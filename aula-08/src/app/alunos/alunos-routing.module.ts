import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoCadastrarComponent } from './aluno-cadastrar/aluno-cadastrar.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoEditarComponent } from './aluno-editar/aluno-editar.component';

import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const alunosRoutes: Routes = [
    {
     path: 'alunos',
     component: AlunosComponent
    },
    {
     path: 'aluno-novo',
     component: AlunoCadastrarComponent,
     canActivate: [AuthGuardService]
    },
    {
     path: 'aluno-detalhes/:id',
     component: AlunoDetalhesComponent
    },
    {
     path: 'aluno-editar/:id',
     component: AlunoEditarComponent,
     canActivate: [AuthGuardService]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(alunosRoutes) ],
    exports: [ RouterModule ],
})
export class AlunosRoutingModule { }
