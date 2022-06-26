import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PikachuComponent } from './pikachu.component';

const routes: Routes = [{ path: '', component: PikachuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PikachuRoutingModule {}
