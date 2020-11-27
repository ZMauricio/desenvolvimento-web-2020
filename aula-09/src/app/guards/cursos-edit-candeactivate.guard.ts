import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CursoEditarComponent } from 'src/app/cursos/curso-editar/curso-editar.component';
import { GeneralCanDeactivate } from 'src/app/guards/general-candeactivate';


@Injectable()
export class CursosEditCanDeactivateGuard implements CanDeactivate<GeneralCanDeactivate> {

    constructor() {

    }

    canDeactivate(
        component: GeneralCanDeactivate,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log('canDeactivate');
        
        if (component.ativado()) {
         return false
        }


        return true;
    }
}