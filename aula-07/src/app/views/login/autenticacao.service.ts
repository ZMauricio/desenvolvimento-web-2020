import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from './../../models/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private usuarioAutenticado: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {

  }


  logarUsuario(login: string, senha: string) {

    this.getUsuario(login, senha).subscribe((usuarios: Usuario[])=>{
      const user = usuarios[0];

      if (login === user.login && senha=== user.senha) {
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);

      } else {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);

        alert('Usuário e/ou senha incorretos!');
      }
      
    });

  }

  isUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }


  getUsuario(login: string, senha: string) {
    return this.http.get('http://localhost:3000/usuarios?login='+login+'&senha='+senha);
  }
}
