import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Aluno } from 'src/app/models/aluno.model';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  public aluno: Aluno;

  constructor(private route: ActivatedRoute,
              private alunosService: AlunosService) {


    const id = Number( this.route.snapshot.paramMap.get('id') );

    this.aluno =this.alunosService.getAlunoById(id);
  }

  ngOnInit(): void {
  }

}
