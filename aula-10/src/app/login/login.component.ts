import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: string = '';
  public password: string = '';


  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {

  }

  ngOnInit(): void {
  }

  logar() {
    this.autenticacaoService.logarUsuario(this.login, this.password);
  }
}
