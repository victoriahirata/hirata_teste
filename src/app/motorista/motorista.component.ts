import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { MotoristasService } from '../motoristas/motoristas.service';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.scss']
})
export class MotoristaComponent implements OnInit {

  form: FormGroup;
  sexos: Array<String> = ['Feminino', 'Masculino'];

  constructor(private fb: FormBuilder, private service: MotoristasService) {
  }

  get nome() {
    return this.form.get('nome');
  }
  get dataNascimento() {
    return this.form.get('dataNascimento');
  }
  get modeloCarro() {
    return this.form.get('modeloCarro');
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
      modeloCarro: [null, Validators.required],
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

  addMotorista() {
    this.form.value;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success =>
          swal({
            title: "Agora você é um de nossos motoristas!",
            text: "Que tal iniciar uma corrida?",
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

