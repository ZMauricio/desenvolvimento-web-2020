import { Component, OnInit } from '@angular/core';


import { Aluno } from 'src/app/models/aluno.model';
import { AlunosService } from '../../services/alunos.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: Array<Aluno> = [ ];

  constructor(private alunosService: AlunosService) {
   this.alunos = this.alunosService.getAll();
  }

  ngOnInit() {

  }

}
