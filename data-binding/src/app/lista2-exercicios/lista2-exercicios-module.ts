import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2ExerciciosRoutingModule } from './lista2-exercicios-routing-module';
import { ExebicaoDeMensagem } from './exebicao-de-mensagem/exebicao-de-mensagem';

@NgModule({
  declarations: [ExebicaoDeMensagem],
  imports: [CommonModule, Lista2ExerciciosRoutingModule],
})
export class Lista2ExerciciosModule {}
