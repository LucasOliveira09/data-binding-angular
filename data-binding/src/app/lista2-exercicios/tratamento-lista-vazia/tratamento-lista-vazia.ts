import { Component } from '@angular/core';

@Component({
  selector: 'app-tratamento-lista-vazia',
  standalone: false,
  styleUrl: './tratamento-lista-vazia.css',
  templateUrl: './tratamento-lista-vazia.html',
})
export class TratamentoListaVazia {
  nomes = [
    {id: 1, nome: "lucas", posicao: 1},
    {id: 2, nome: "Luiz", posicao: 2},
    {id: 3, nome: "Muniz", posicao: 3},
    {id: 4, nome: "Guilherme", posicao: 4},
    {id: 5, nome: "Otavio", posicao: 5}
  ]

  removerUsuario() {
          this.nomes.splice(this.nomes.length - 1, 1);
  }

  removerTodos() {
    this.nomes.length = 0;
  }

  validarLista(): boolean {
    return this.nomes.length > 0;
  }
}
