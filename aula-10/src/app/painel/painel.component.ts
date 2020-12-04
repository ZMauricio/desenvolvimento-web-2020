import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';


import { AlunosService } from 'src/app/services/alunos.service';
import { Aluno } from 'src/app/models/aluno.model';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  public alunos: Array<Aluno> = [ ];

  public nomeQuery = new FormControl();
  public total: number = 0;

  public resultados: Observable<any>;


  constructor(private alunosService: AlunosService) {
    
  }

  ngOnInit(): void {
    this.resultados = this.nomeQuery.valueChanges.pipe(
        filter( value => value.length > 2),
        map( value => value.trim() ),
        debounceTime(300),
        distinctUntilChanged(),
        // tap(value=> console.log(value)),
        switchMap( (value) => {
          return this.alunosService.getByNome(value);
        }),
        map( (resposta: Aluno[])=> resposta ),
        tap( (resposta: Aluno[])=> this.total = resposta.length)

    );

  }

  ngOnDestroy() {
    
  }



  deletar(id: number) {
    this.alunosService.deletar(id).subscribe((reposta: any)=>{


      this.alunosService.getAll().subscribe((alunos:Aluno[])=>{
        this.alunos = alunos;
      });
      

    });
   
  }


  buscar() {
    this.resultados = this.alunosService.getByNome(this.nomeQuery.value).pipe(
      tap((resposta: Aluno[])=> this.total = resposta.length),
      map((resposta: Aluno[])=> this.alunos = resposta)
    )
  }
}
