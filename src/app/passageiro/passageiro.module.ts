import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PassageiroComponent } from './passageiro.component';
@NgModule({
  declarations: [
    PassageiroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PassageiroModule { }
