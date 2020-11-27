import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosGuard } from 'src/app/guards/cursos.guard';
import { CursosEditCanDeactivateGuard } from '../guards/cursos-edit-candeactivate.guard';
import { CursoInformacoesResolve } from 'src/app/guards/curso-informacoes.guard';


import { CursosComponent } from './cursos.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';






const cursosRoutes: Routes = [
   /*
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/novo', component: CursoNovoComponent },
    { path: 'cursos/:id', component: CursoDetalhesComponent },
    { path: 'cursos/:id/editar', component: CursoEditarComponent }
     */
    { path: '', component: CursosComponent, canActivateChild: [ CursosGuard ],
      children: [
        { path: 'novo', component: CursoNovoComponent },
        { path: ':id', component: CursoDetalhesComponent,
          //  resolve: { curso: CursoInformacoesResolve }
        },
        { path: ':id/editar', component: CursoEditarComponent, canDeactivate: [ CursosEditCanDeactivateGuard ] }
    ]}
    
];


@NgModule({
    imports: [ RouterModule.forChild(cursosRoutes) ],
    exports: [ RouterModule ]
})
export class CursosRoutingModule { }
