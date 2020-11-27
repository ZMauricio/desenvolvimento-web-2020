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

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    /*
    this.cursosService.getAll().subscribe((listaCursos: Curso[])=>{
      this.cursos = listaCursos;
    });
    */

    this.cursosService.paginar(this.indice, this.quantItens).subscribe((cursos: Curso[])=>{
      this.cursos = cursos;
    });
  }

  mudarPagina(indice: number) {
    this.indice = indice;
    
    this.cursosService.paginar(this.indice, this.quantItens).subscribe((cursos: Curso[])=>{
      this.cursos = cursos;
    });
  }

}
