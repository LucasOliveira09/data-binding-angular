import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-habilitado-ou-desabilitado',
  standalone: false,
  styleUrl: './botao-habilitado-ou-desabilitado.css',
  templateUrl: './botao-habilitado-ou-desabilitado.html',
})
export class BotaoHabilitadoOuDesabilitado {
  Desabilitado: boolean = true;

  termo: string = '';
}