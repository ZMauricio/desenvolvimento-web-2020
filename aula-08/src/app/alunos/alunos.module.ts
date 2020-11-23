import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';

import { AlunosComponent } from './alunos.component';
import { AlunoCadastrarComponent } from './aluno-cadastrar/aluno-cadastrar.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoEditarComponent } from './aluno-editar/aluno-editar.component';



@NgModule({
    imports: [
        AlunosRoutingModule,
        FormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunoCadastrarComponent,
        AlunoDetalhesComponent,
        AlunoEditarComponent
    ],
    providers: [],
})
export class AlunosModule { }
