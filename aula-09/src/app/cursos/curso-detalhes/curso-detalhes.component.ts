import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {
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
    /*

    this.routes.data.subscribe((curso: Curso)=>{

      const obj = JSON.stringify(curso);
      console.log('curso', curso);
    });
    */
  }

  editar() {
    this.router.navigate(['/cursos/'+this.curso.id+'/editar']);
  }

}
