import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Curso } from 'src/app/models/curso.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class CursosService {
  private url: string = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Curso>(this.url+'/'+id);
  }

  update(curso: Curso) {
    const cursoPut = JSON.stringify(curso);
    return this.http.put<Curso>(this.url+'/'+curso.id, cursoPut, httpOptions);
  }

  /*
  paginar(indicePagina: number, quantItens: number):Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url+'?_page='+indicePagina+'&_limit='+quantItens);
  }
  */


  paginar(indicePagina: number, quantItens: number) {
    return this.http.get(this.url+'?_page='+indicePagina+'&_limit='+quantItens, {observe : 'response'});
  }
}
