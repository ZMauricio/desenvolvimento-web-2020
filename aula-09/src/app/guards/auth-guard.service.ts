import { Injectable } from '@angular/core';

import { CanActivate, CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AutenticacaoService } from '../login/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) { }

  canActivate(): Observable<boolean> | boolean {

    console.log('canActivate!');

    if (this.autenticacaoService.isUsuarioAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('CanLoad!');

    if (this.autenticacaoService.isUsuarioAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}