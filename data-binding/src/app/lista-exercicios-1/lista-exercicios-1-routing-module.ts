import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApresentacaoUser } from './apresentacao-user/apresentacao-user';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';
import { ImagemDinamica } from './imagem-dinamica/imagem-dinamica';
import { BotaoHabilitadoOuDesabilitado } from './botao-habilitado-ou-desabilitado/botao-habilitado-ou-desabilitado';
import { ContadorCurtidas } from './contador-curtidas/contador-curtidas';

const routes: Routes = [
  { path: 'apresentacao-user', component: ApresentacaoUser },
  { path: 'calculando-com-interpolation', component: CalculandoComInterpolation },
  { path: 'imagem-dinamica', component: ImagemDinamica },
  { path: 'botao-habilitado-ou-desabilitado', component: BotaoHabilitadoOuDesabilitado },
  { path: 'contador-curtidas', component: ContadorCurtidas },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
