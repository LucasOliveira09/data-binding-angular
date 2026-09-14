import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'apresentacao-usuario',
  loadChildren: () => import('./lista-exercicios-1/apresentacao-user.module').then(m => m.Apresentacao-userModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
