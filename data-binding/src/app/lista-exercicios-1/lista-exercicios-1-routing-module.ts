import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';
import { ApresentacaoUser } from './apresentacao-user/apresentacao-user';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'apresentacao-user', component: ApresentacaoUser },
  {path: 'calculando-com-interpolation', component: CalculandoComInterpolation }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
