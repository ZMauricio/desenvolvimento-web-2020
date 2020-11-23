import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit {
  public curso: Curso = {
    id: null,
    nome: '',
    departamento: '',
    periodos: null
  };
  
  constructor(private routes: ActivatedRoute, private router: Router, private cursosService: CursosService) { }

  ngOnInit(): void {
    this.routes.params.subscribe((data)=>{
      let id: number = Number(data['id']);

      this.cursosService.getById(id).subscribe((_curso: Curso)=>{
        this.curso = _curso;
      });

    });
  }


  editar() {
    this.cursosService.update(this.curso).subscribe(()=>{
      this.router.navigate(['/cursos']);
    });
  }
}
