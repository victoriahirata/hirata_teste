import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasComponent } from './motoristas.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MotoristasComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ReactiveFormsModule
  ],
  exports:[
    MotoristasComponent
  ]

})
export class MotoristasModule { }
