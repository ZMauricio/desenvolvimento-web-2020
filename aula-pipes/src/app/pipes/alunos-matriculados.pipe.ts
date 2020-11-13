import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Pipe({
  name: 'alunosMatriculados'
})
export class AlunosMatriculadosPipe implements PipeTransform {

  transform(alunos: Aluno[]): Aluno[] {

    const alunosSelecionados = alunos.filter( (item)=>{
      if (item.matriculado) {
        return item;
      }
    });

    return alunosSelecionados;
  }

}
