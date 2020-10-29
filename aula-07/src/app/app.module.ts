import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AlunosComponent } from './views/alunos/alunos.component';
import { AlunoDetalhesComponent } from './views/aluno-detalhes/aluno-detalhes.component';
import { AlunoCadastrarComponent } from './views/aluno-cadastrar/aluno-cadastrar.component';
import { PainelComponent } from './views/painel/painel.component';
import { AlunoEditarComponent } from './views/aluno-editar/aluno-editar.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlunosComponent,
    AlunoDetalhesComponent,
    AlunoCadastrarComponent,
    PainelComponent,
    AlunoEditarComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    // NgxNavbarModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
