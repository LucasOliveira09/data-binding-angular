import { Component } from '@angular/core';

@Component({
  selector: 'app-situacao-de-estoque',
  standalone: false,
  templateUrl: './situacao-de-estoque.html',
  styleUrl: './situacao-de-estoque.css',
})
export class SituacaoDeEstoque {
  nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  adicionar(): void {
    this.quantidadeEstoque++;
  }

  remover(): void {
    // Requisito 5: Garante que nunca fique negativo
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
