import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PassageirosService } from '../passageiros/passageiros.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-passageiro',
  templateUrl: './passageiro.component.html',
  styleUrls: ['./passageiro.component.scss']
})
export class PassageiroComponent implements OnInit {

  form: FormGroup;
  sexos: Array<String> = ['Feminino', 'Masculino'];

  constructor(private fb: FormBuilder, private service: PassageirosService) {
  }

  get nome() {
    return this.form.get('nome');
  }
  get dataNascimento() {
    return this.form.get('dataNascimento');
  }
  get cpf() {
    return this.form.get('cpf');
  }
  get sexo() {
    return this.form.get('sexo');
  }
  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      dataNascimento: [null, Validators.required],
      cpf: [null, Validators.required],
      sexo: [null, Validators.required],
    });
  }
  verificarCampo(campo) {
    return !this.form.get(campo).valid && (this.form.get(campo).touched || this.form.get(campo).dirty)
  }
  aplicarErro(campo) {
    return {
      'is-invalid': this.verificarCampo(campo)
    }
  }

  addPassageiro() {
    this.form.value;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success =>
          swal({
            title: "Agora você é um de nossos passageiros!",
            text: "Que tal chamar uma corrida?",
            icon: "success",
          }),
        error =>
          swal({
            title: "Sinto muito...",
            text: "Não foi possível realizar seu cadastro, tente novamente!",
            icon: "error",
          }),
        () => console.log('request complete')
      );
    }
  }
}
