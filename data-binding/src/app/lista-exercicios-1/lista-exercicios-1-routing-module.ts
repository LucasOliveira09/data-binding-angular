import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApresentacaoUser } from './apresentacao-user/apresentacao-user';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';
import { ImagemDinamica } from './imagem-dinamica/imagem-dinamica';
import { BotaoHabilitadoOuDesabilitado } from './botao-habilitado-ou-desabilitado/botao-habilitado-ou-desabilitado';
import { ContadorCurtidas } from './contador-curtidas/contador-curtidas';
import { ContadorCompleto } from './contador-completo/contador-completo';
import { NomeTempoReal } from './nome-tempo-real/nome-tempo-real';
import { CadastroProduto } from './cadastro-produto/cadastro-produto';
import { ControleEstoque } from './controle-estoque/controle-estoque';
import { LoginSimulado } from './login-simulado/login-simulado';
import { CarrinhoCompras } from './carrinho-compras/carrinho-compras';

const routes: Routes = [
  { path: 'apresentacao-user', component: ApresentacaoUser },
  { path: 'calculando-com-interpolation', component: CalculandoComInterpolation },
  { path: 'imagem-dinamica', component: ImagemDinamica },
  { path: 'botao-habilitado-ou-desabilitado', component: BotaoHabilitadoOuDesabilitado },
  { path: 'contador-curtidas', component: ContadorCurtidas },
  { path: 'contador-completo', component: ContadorCompleto },
  { path: 'nome-tempo-real', component: NomeTempoReal },
  { path: 'cadastro-produto', component: CadastroProduto },
  { path: 'controle-estoque', component: ControleEstoque },
  { path: 'login-simulado', component: LoginSimulado },
  { path: 'carrinho-compras', component: CarrinhoCompras },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
