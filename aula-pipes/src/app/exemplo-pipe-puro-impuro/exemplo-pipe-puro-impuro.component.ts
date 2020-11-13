import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Component({
  selector: 'app-exemplo-pipe-puro-impuro',
  templateUrl: './exemplo-pipe-puro-impuro.component.html',
  styleUrls: ['./exemplo-pipe-puro-impuro.component.css']
})
export class ExemploPipePuroImpuroComponent implements OnInit {
   public valor: number;
   public expoente: number;

  public nome: string = '';

  public alunos: Aluno [] = [
    {
      nome: 'Chaves',
      matriculado: true
    },
    {
      nome: 'Godinez',
      matriculado: false
    },
    {
      nome: 'Chiquinha',
      matriculado: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  adicionar() {
    this.alunos.push({
      nome: this.nome,
      matriculado: true
    });

    console.log('alunos', this.alunos);
  }

  addReferencia() {
    this.alunos.push({
      nome: this.nome,
      matriculado: true
    });

    const auxAlunos: Aluno[] = this.alunos;

    this.alunos = [];
    this.alunos = this.alunos.concat(auxAlunos);

    console.log('alunos', this.alunos);
  }
}
