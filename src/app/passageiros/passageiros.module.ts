import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassageirosComponent } from './passageiros.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PassageirosComponent,
  ],
  exports: [
    PassageirosComponent
  ]
})
export class PassageirosModule { }
