import { Component, OnInit } from '@angular/core';

import { CursosService } from '../services/cursos.service';

import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public cursos: Curso[] = [];
  public indice: number = 1;
  public quantItens: number = 5;

  public paginas: any[] = [];
  public maxPaginas:number = null;
  public totalCursos:number = null;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {

    this.cursosService.paginar(this.indice, this.quantItens).subscribe((resposta)=>{
      console.log('resposta', resposta);
      console.log('headers', resposta.headers);
      console.log('Count', resposta.headers.get('X-Total-Count'));

      this.totalCursos = Number(resposta.headers.get('X-Total-Count'));
      this.maxPaginas = Math.ceil(this.totalCursos/ this.quantItens);

      console.log(resposta.body);

      let aux = JSON.stringify(resposta.body);
      let auxArray: any[] = JSON.parse(aux);

      this.cursos = auxArray;

      console.log('cursos', this.cursos);


      // this.cursos = cursos;

      this.gerarIndices();
    });


  }


  gerarIndices() {
    let ativa: boolean = false;
    this.paginas = [];

    for (let i = 1; i<=this.maxPaginas; i++) {
      if (this.indice === i) {
        ativa = true;
      } else {
        ativa = false;
      }

      this.paginas.push({
        indice: i,
        ativa: ativa
      });

    }


  }

  mudarPagina(indice: number) {
    this.indice = indice;
    
    this.cursosService.paginar(this.indice, this.quantItens).subscribe((resposta)=>{
      this.totalCursos = Number(resposta.headers.get('X-Total-Count'));
      this.maxPaginas = Math.ceil(this.totalCursos/ this.quantItens);


      let aux = JSON.stringify(resposta.body);
      let auxArray: any[] = JSON.parse(aux);

      this.cursos = auxArray;

      this.gerarIndices();
    });
  }

}
