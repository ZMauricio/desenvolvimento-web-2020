import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AlunosService } from 'src/app/services/alunos.service';
import { Aluno } from 'src/app/models/aluno.model';


@Component({
  selector: 'app-aluno-cadastrar',
  templateUrl: './aluno-cadastrar.component.html',
  styleUrls: ['./aluno-cadastrar.component.css']
})
export class AlunoCadastrarComponent implements OnInit {

  public aluno: Aluno = {
    id: null,
    nome: '',
    curso: '',
    periodo: null,
    foto: ''
  };

  constructor(private router: Router,
              private alunosService: AlunosService) {

  }

  ngOnInit(): void {
  }

  cadastrar() {
    
    this.alunosService.cadastrar(this.aluno).subscribe((aluno: Aluno)=>{
      this.router.navigateByUrl('/admin');
    });
   
  }
}
