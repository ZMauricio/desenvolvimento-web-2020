import { Component, OnInit } from '@angular/core';


import { Aluno } from 'src/app/models/aluno.model';
import { AlunosService } from 'src/app/services/alunos.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: Array<Aluno> = [ ];

  constructor(private alunosService: AlunosService) {

    this.alunosService.getAll().subscribe((data: Aluno[])=> {
      this.alunos = data;
    });
   
  }

  ngOnInit() {

  }

}
