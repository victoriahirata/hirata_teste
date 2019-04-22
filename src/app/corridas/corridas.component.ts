import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { CorridasService } from './corridas.service';
import { Passageiro } from 'src/models/passageiro.model';

@Component({
  selector: 'app-corridas',
  templateUrl: './corridas.component.html',
  styleUrls: ['./corridas.component.scss']
})
export class CorridasComponent implements OnInit {

  form: FormGroup;
  sexos: Array<String> = ['Feminino', 'Masculino'];

  constructor(private fb: FormBuilder, private service: CorridasService) {
  }

  get idPassageiro() {
    return this.form.get('idPassageiro');
  }
  get idMotorista() {
    return this.form.get('idMotorista');
  }
  get valor() {
    return this.form.get('valor');
  }
  ngOnInit() {
    this.form = this.fb.group({
      idPassageiro: [null, Validators.required],
      idMotorista: [null, Validators.required],
      valor: [null, Validators.required],
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
  addCorrida() {
    this.form.value;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success =>
          swal({
            title: "Corrida criada!",
            icon: "success",
          }),
        error =>
          swal({
            title: "Não foi possível criar a corrida!",
            icon: "error",
          }),
        () => console.log('request complete')
      );
    }
  }
}
