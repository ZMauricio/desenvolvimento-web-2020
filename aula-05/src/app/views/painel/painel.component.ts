import { Component, OnInit } from '@angular/core';


import { AlunosService } from 'src/app/services/alunos.service';
import { Aluno } from 'src/app/models/aluno.model';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  public alunos: Array<Aluno> = [ ];


  constructor(private alunosService: AlunosService) {
    this.alunos = this.alunosService.getAll();
  }

  ngOnInit(): void {
  }

  deletar(id: number) {
    this.alunosService.deletar(id);
    // this.alunos = this.alunosService.getAll();
  }
}
