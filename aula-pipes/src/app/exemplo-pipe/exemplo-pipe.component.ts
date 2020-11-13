import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipe',
  templateUrl: './exemplo-pipe.component.html',
  styleUrls: ['./exemplo-pipe.component.css']
})
export class ExemploPipeComponent implements OnInit {

  public dataAtual = Date.now();

  public dinheiro: number = 2.557809999;
  public valor: number = 99.1578912467;

  public numero: number = 2;


  public textao: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolor dicta minima enim voluptatum voluptates, dolorem sequi, nemo aliquam ipsum sapiente eos? Eos saepe corporis quo minus ex est iste?';
  public textozinho = 'Aula de Desenvolvimento Web Font-End'

  constructor() { }

  ngOnInit(): void {
  }

}
