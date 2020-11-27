import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GeneralCanDeactivate } from 'src/app/guards/general-candeactivate';

import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit, GeneralCanDeactivate {
  public curso: Curso = {
    id: null,
    nome: '',
    departamento: '',
    periodos: null
  };

  public dadosAlterados: boolean = false;
  
  constructor(private routes: ActivatedRoute, private router: Router, private cursosService: CursosService) { }

  ngOnInit(): void {
    this.routes.params.subscribe((data)=>{
      let id: number = Number(data['id']);

      this.cursosService.getById(id).subscribe((_curso: Curso)=>{
        this.curso = _curso;
      });

    });
  }

  isAlterado() {
    this.dadosAlterados = true;

    console.log('isAlterado');
  }

  ativado(): boolean {
    return this.formAlterado();
  }

  formAlterado(): boolean {
    let resposta: boolean = false;

    if (this.dadosAlterados) {
      resposta = confirm('Você realmente deseja sair desta página?');
      if (resposta) {
        return false;
      } else {
         return true;
      }
    }

    return false;
  }


  editar() {
    this.cursosService.update(this.curso).subscribe(()=>{
      this.router.navigate(['/cursos']);
    });
  }
}
