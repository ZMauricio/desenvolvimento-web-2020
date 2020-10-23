import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { Aluno } from 'src/app/models/aluno.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AlunosService {


  private atual = null;


  constructor(private http: HttpClient) {

  }

  cadastrar(aluno: Aluno): Observable<any> {
    const codigo = Number(this.gerarCodigo());
    aluno.id = Number(codigo);
    aluno.foto = '../../../assets/img/alunos/aluno-01.jpg';

    const alunoPost = JSON.stringify(aluno);

    return this.http.post('http://localhost:3000/alunos/', alunoPost, httpOptions);
  }

  editar(aluno: Aluno): Observable<any> {
    const alunoPut = JSON.stringify(aluno);
    return this.http.put('http://localhost:3000/alunos/'+aluno.id, alunoPut, httpOptions);
  }

  getAlunoById(id: number):Observable<Aluno> {
    return this.http.get<Aluno>('http://localhost:3000/alunos/'+id);
  }

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>('http://localhost:3000/alunos');
  }

  deletar(id: number):Observable<any> {
   return this.http.delete('http://localhost:3000/alunos/'+id);
  }



  gerarCodigo() {
    let codigo = new Date().getTime();

    if(codigo === this.atual) {
      codigo++;
    }
    this.atual = codigo;
    return codigo;
  }
}
