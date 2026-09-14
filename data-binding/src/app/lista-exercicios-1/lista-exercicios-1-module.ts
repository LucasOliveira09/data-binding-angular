import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercicios1RoutingModule } from './lista-exercicios-1-routing-module';
import { ApresentacaoUser } from './apresentacao-user/apresentacao-user';

@NgModule({
  declarations: [ApresentacaoUser],
  imports: [CommonModule, ListaExercicios1RoutingModule],
})
export class ListaExercicios1Module {}
