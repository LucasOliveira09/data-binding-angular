import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing-module';
import { Cabecalho } from './cabecalho/cabecalho';

@NgModule({
  declarations: [Cabecalho],
  imports: [CommonModule, BaseRoutingModule],
})
export class BaseModule {}
