import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent implements OnInit {
  alunoForm: FormGroup;

  public disciplinas: any[] = [
    { id: 1, nome: 'Dev Web', value: 'Dev Web', checked: false},
    { id: 2, nome: 'Redes', value: 'Redes', checked: false},
    { id: 3, nome: 'AEDs', value: 'AEDs', checked: false}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.alunoForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      telefone: ['', Validators.required],
      idade: ['0', Validators.compose([Validators.required, Validators.min(0)]) ],
      nascimento: ['', Validators.required],
      genero: ['', Validators.required],
      disciplinas: this.formBuilder.array([], Validators.required)
    });

    this.onLoadCheckboxStatus();
  }

  onLoadCheckboxStatus() {
    const checkboxArrayList: FormArray = this.alunoForm.get('disciplinas') as FormArray;

    this.disciplinas.forEach(o => {
      this.updateCheckControl(checkboxArrayList, o);
    })


  }

  updateCheckControl(cal, o) {
    if (o.checked) {
      cal.push(new FormControl(o.value));
    } else {
      cal.controls.forEach((item: FormControl, index) => {
        if (item.value == o.value) {
          cal.removeAt(index);
          return;
        }
      });
    }
  }


  onSelectionChange(e, i) {
    const disciplina: FormArray = this.alunoForm.get('disciplinas') as FormArray;


    this.disciplinas[i].checked = e.target.checked;

    
    this.updateCheckControl(disciplina, e.target);
  }


  async submit() {

    if (this.alunoForm.invalid || this.alunoForm.pending) {
      console.log('O formulário não foi preenchido corretamente!');
      return;
    }


    const objetoAluno = this.alunoForm.value;
    console.log('Aluno', objetoAluno);

  }

}
