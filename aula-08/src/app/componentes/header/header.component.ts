import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/login/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public exibir: boolean = false;

  constructor(private autenticacaoService: AutenticacaoService) {

    this.autenticacaoService.mostrarMenuEmitter.subscribe((resposta)=>{
      this.exibir = resposta;
    });
    
  }

  ngOnInit(): void {
  }

}
