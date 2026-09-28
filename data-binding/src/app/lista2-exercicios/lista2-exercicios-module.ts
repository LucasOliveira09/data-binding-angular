import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Lista2ExerciciosRoutingModule } from './lista2-exercicios-routing-module';
import { ExebicaoDeMensagem } from './exebicao-de-mensagem/exebicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';
import { VerificacaoDeIdade } from './verificacao-de-idade/verificacao-de-idade';
import { SituacaoDeEstoque } from './situacao-de-estoque/situacao-de-estoque';
import { ListaNomes } from './lista-nomes/lista-nomes';
import { TratamentoListaVazia } from './tratamento-lista-vazia/tratamento-lista-vazia';
import { CoresAlternadas } from './cores-alternadas/cores-alternadas';
import { InterfaceProdutos } from './interface-produtos/interface-produtos';
import { ClassificacaoProdutos } from './classificacao-produtos/classificacao-produtos';
import { PromocaoProdutos } from './promocao-produtos/promocao-produtos';

@NgModule({
  declarations: [
    ExebicaoDeMensagem,
    SituacaoDoUsuario,
    VerificacaoDeIdade,
    SituacaoDeEstoque,
    ListaNomes,
    TratamentoListaVazia,
    CoresAlternadas,
    InterfaceProdutos,
    ClassificacaoProdutos,
    PromocaoProdutos,
  ],
  imports: [CommonModule, Lista2ExerciciosRoutingModule, FormsModule],
})
export class Lista2ExerciciosModule {}
