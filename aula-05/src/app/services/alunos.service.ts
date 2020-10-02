import { Injectable } from '@angular/core';

import { Aluno } from 'src/app/models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  public alunos: Array<Aluno> = [
    {
      id: 1,
      nome: 'João',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-01.jpg'
    },
    {
      id: 2,
      nome: 'Júlio',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-02.jpg'
    },
    {
      id: 3,
      nome: 'Maria',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-03.jpg'
    },
    {
      id: 4,
      nome: 'Maria Clara',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-04.jpg'
    },
    {
      id: 5,
      nome: 'Ana Júlia',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-01.jpg'
    },
    {
      id: 6,
      nome: 'Cláudio',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-02.jpg'
    },
    {
      id: 7,
      nome: 'Peter Parker',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-03.jpg'
    },
    {
      id: 8,
      nome: 'Tony Stark',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-04.jpg'
    },
    {
      id: 9,
      nome: 'Tina Turner',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-01.jpg'
    }
  ];

  constructor() { }

  cadastrar(aluno: Aluno) {
    const id = this.alunos.length+1;
    aluno.id = id;
    aluno.foto = '../../../assets/img/alunos/aluno-01.jpg';

    this.alunos.push(aluno);
  }

  editar(aluno: Aluno) {
    for(let obj of this.alunos) {
      if (aluno.id === obj.id) {
        obj = aluno;
        break;
      }
    }
  }

  getAlunoById(id: number) {
    for(const obj of this.alunos) {
      if (id === obj.id) {
        return obj;
      }
    }

    return null;
  }

  getAll(): Array<Aluno> {
    return this.alunos;
  }

  deletar(id: number) {

    for(let i=0; i<this.alunos.length; i++) {
      if (id === this.alunos[i].id) {
        this.alunos.splice(i, 1);
        break;
      }
    }

  }


}
