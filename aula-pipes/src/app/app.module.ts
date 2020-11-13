import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipePuroImpuroComponent } from './exemplo-pipe-puro-impuro/exemplo-pipe-puro-impuro.component';
import { PotenciaPipe } from './pipes/potencia.pipe';
import { FormsModule } from '@angular/forms';
import { AlunosMatriculadosPipe } from './pipes/alunos-matriculados.pipe';
import { AlunosMatriculadosImpuroPipe } from './pipes/alunos-matriculados-impuro.pipe';
import { ExemploPipeComponent } from './exemplo-pipe/exemplo-pipe.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MeuPipePipe } from './pipes/meu-pipe.pipe';
import { ExemploPipePuroComponent } from './exemplo-pipe-puro/exemplo-pipe-puro.component';
import { CalcPotenciaPipe } from './pipes/calc-potencia.pipe';
import { ExemploAlunosMatriculadosPipe } from './pipes/exemplo-alunos-matriculados.pipe';
import { ExemploAlunosMatriculadosImpuroPipe } from './pipes/exemplo-alunos-matriculados-impuro.pipe';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    ExemploPipePuroImpuroComponent,
    PotenciaPipe,
    AlunosMatriculadosPipe,
    AlunosMatriculadosImpuroPipe,
    ExemploPipeComponent,
    MeuPipePipe,
    ExemploPipePuroComponent,
    CalcPotenciaPipe,
    ExemploAlunosMatriculadosPipe,
    ExemploAlunosMatriculadosImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
