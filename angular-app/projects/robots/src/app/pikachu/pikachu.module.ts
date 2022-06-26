import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PikachuRoutingModule } from './pikachu-routing.module';
import { PikachuComponent } from './pikachu.component';


@NgModule({
  declarations: [
    PikachuComponent
  ],
  imports: [
    CommonModule,
    PikachuRoutingModule
  ]
})
export class PikachuModule { }
