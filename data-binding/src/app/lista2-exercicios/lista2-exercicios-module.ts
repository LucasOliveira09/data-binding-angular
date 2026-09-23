import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Lista2ExerciciosRoutingModule } from './lista2-exercicios-routing-module';
import { ExebicaoDeMensagem } from './exebicao-de-mensagem/exebicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';
import { VerificacaoDeIdade } from './verificacao-de-idade/verificacao-de-idade';
import { SituacaoDeEstoque } from './situacao-de-estoque/situacao-de-estoque';

@NgModule({
  declarations: [ExebicaoDeMensagem, SituacaoDoUsuario, VerificacaoDeIdade, SituacaoDeEstoque],
  imports: [CommonModule, Lista2ExerciciosRoutingModule, FormsModule],
})
export class Lista2ExerciciosModule {}
