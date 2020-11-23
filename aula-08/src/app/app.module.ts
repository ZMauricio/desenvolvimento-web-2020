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

import { AlunosModule } from 'src/app/alunos/alunos.module';
import { CursosModule } from 'src/app/cursos/cursos.module';


import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';


// import { AlunosComponent } from './alunos/alunos.component';
// import { AlunoDetalhesComponent } from './views/aluno-detalhes/aluno-detalhes.component';
// import { AlunoCadastrarComponent } from './views/aluno-cadastrar/aluno-cadastrar.component';
// import { AlunoEditarComponent } from './views/aluno-editar/aluno-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // AlunosComponent,
    // AlunoDetalhesComponent,
    // AlunoCadastrarComponent,
    // AlunoEditarComponent,
    PainelComponent,
    LoginComponent
  ],
  imports: [
    AlunosModule,
    CursosModule,
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
