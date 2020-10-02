import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Aluno } from 'src/app/models/aluno.model';
import { AlunosService } from 'src/app/services/alunos.service';


@Component({
  selector: 'app-aluno-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.css']
})
export class AlunoEditarComponent implements OnInit {

  public aluno: Aluno = {
    id: null,
    nome: '',
    curso: '',
    periodo: null,
    foto: ''
  };

  constructor(private routerActive: ActivatedRoute,
              private router: Router,
              private alunosService: AlunosService) {
    const id = Number( this.routerActive.snapshot.paramMap.get('id') );

    this.aluno = this.alunosService.getAlunoById(id);
  }

  ngOnInit(): void {
  }

  editar() {
    this.alunosService.editar(this.aluno);
    this.router.navigateByUrl('/admin');
  }
}
