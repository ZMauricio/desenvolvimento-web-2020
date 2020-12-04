import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';
import { Observable } from 'rxjs';

import { CursosService } from '../services/cursos.service';


import { Curso } from './../models/curso.model';

@Injectable()
export class CursoInformacoesResolve implements Resolve<Curso> {

    constructor(private cursosService: CursosService) {

    }

    resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let id:number =  Number(router.params['id']);

        return this.cursosService.getById(id);
    }

}