import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExebicaoDeMensagem } from './exebicao-de-mensagem/exebicao-de-mensagem';

const routes: Routes = [
  { path: 'exebicao-de-mensagem', component: ExebicaoDeMensagem }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista2ExerciciosRoutingModule {}
