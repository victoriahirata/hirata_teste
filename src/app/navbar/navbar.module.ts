import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';
import { PassageiroComponent } from '../passageiro/passageiro.component';
import { MotoristaComponent } from '../motorista/motorista.component';
import { LoginComponent } from '../login/login.component';
import { PassageirosComponent } from '../passageiros/passageiros.component';
import { MotoristasComponent } from '../motoristas/motoristas.component';
import { CorridasComponent } from '../corridas/corridas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    PassageiroComponent,
    MotoristaComponent,
    MotoristasComponent,
    PassageirosComponent,
    CorridasComponent,
    LoginComponent
  ],
  exports: [
    NavbarComponent,
  ]
})
export class NavbarModule { }
