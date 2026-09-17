import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios1RoutingModule } from './lista-exercicios-1-routing-module';
import { ApresentacaoUser } from './apresentacao-user/apresentacao-user';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';
import { ImagemDinamica } from './imagem-dinamica/imagem-dinamica';
import { BotaoHabilitadoOuDesabilitado } from './botao-habilitado-ou-desabilitado/botao-habilitado-ou-desabilitado';
import { ContadorCurtidas } from './contador-curtidas/contador-curtidas';
import { ContadorCompleto } from './contador-completo/contador-completo';
import { NomeTempoReal } from './nome-tempo-real/nome-tempo-real';
import { CadastroProduto } from './cadastro-produto/cadastro-produto';

@NgModule({
  declarations: [
    ApresentacaoUser,
    CalculandoComInterpolation,
    ImagemDinamica,
    BotaoHabilitadoOuDesabilitado,
    ContadorCurtidas,
    ContadorCompleto,
    NomeTempoReal,
    CadastroProduto,
  ],
  imports: [CommonModule, ListaExercicios1RoutingModule, FormsModule],
})
export class ListaExercicios1Module {}
