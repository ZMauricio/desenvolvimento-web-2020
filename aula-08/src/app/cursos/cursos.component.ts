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

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.getAll().subscribe((listaCursos: Curso[])=>{
      this.cursos = listaCursos;
    });
  }

}
