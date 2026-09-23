import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2ExerciciosRoutingModule } from './lista2-exercicios-routing-module';
import { ExebicaoDeMensagem } from './exebicao-de-mensagem/exebicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';

@NgModule({
  declarations: [ExebicaoDeMensagem, SituacaoDoUsuario],
  imports: [CommonModule, Lista2ExerciciosRoutingModule],
})
export class Lista2ExerciciosModule {}
