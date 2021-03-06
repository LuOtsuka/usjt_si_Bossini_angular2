import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo'];

  constructor() { }

  ngOnInit() {
  }

  salvar(pessoaForm): void{
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;
    console.log(this.pessoa)
  }

}