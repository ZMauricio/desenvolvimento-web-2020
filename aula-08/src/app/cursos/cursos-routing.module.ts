import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    { path: 'cursos', component: CursosComponent, children: [
        { path: 'novo', component: CursoNovoComponent },
        { path: ':id', component: CursoDetalhesComponent },
        { path: ':id/editar', component: CursoEditarComponent }
    ]}
    
];


@NgModule({
    imports: [ RouterModule.forChild(cursosRoutes) ],
    exports: [ RouterModule ]
})
export class CursosRoutingModule { }
