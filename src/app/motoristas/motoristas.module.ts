import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasComponent } from './motoristas.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [
    MotoristasComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports:[
    MotoristasComponent
  ]

})
export class MotoristasModule { }
