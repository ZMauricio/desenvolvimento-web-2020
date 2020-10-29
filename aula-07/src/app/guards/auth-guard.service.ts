import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AutenticacaoService } from '../views/login/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) { }

  canActivate(): Observable<boolean> | boolean {

    if (this.autenticacaoService.isUsuarioAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
