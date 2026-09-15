import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'lista-exercicios-1',
  loadChildren: () => import('./lista-exercicios-1/lista-exercicios-1-module').then(m => m.ListaExercicios1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
