import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';

import { CursosService } from 'src/app/services/cursos.service';
import { CursosGuard } from 'src/app/guards/cursos.guard';
import { CursosEditCanDeactivateGuard } from 'src/app/guards/cursos-edit-candeactivate.guard';
import { CursoInformacoesResolve } from 'src/app/guards/curso-informacoes.guard';

import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalhesComponent,
        CursoNovoComponent,
        CursoEditarComponent
    ],
    providers: [
        CursosService,
        CursosGuard,
        CursosEditCanDeactivateGuard,
        CursoInformacoesResolve
    ],
})
export class CursosModule { }
