import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PassageiroComponent } from '../passageiro/passageiro.component';
import { MotoristaComponent } from '../motorista/motorista.component';
import { LoginComponent } from '../login/login.component';
import { MotoristasComponent } from '../motoristas/motoristas.component';
import { PassageirosComponent } from '../passageiros/passageiros.component';
import { CorridasComponent } from '../corridas/corridas.component';

const routes: Routes = [
  { path: 'passageiro', component: PassageiroComponent },
  { path: 'motorista', component: MotoristaComponent },
  { path: 'motoristas', component: MotoristasComponent },
  { path: 'passageiros', component: PassageirosComponent },
  { path: 'corridas', component: CorridasComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ 
    RouterModule 
  ]

})
export class NavbarRoutingModule { }
