import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios1RoutingModule } from './lista-exercicios-1-routing-module';
import { ApresentacaoUser } from './apresentacao-user/apresentacao-user';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';

@NgModule({
  declarations: [ApresentacaoUser, CalculandoComInterpolation],
  imports: [CommonModule, ListaExercicios1RoutingModule, FormsModule],
})
export class ListaExercicios1Module {}
