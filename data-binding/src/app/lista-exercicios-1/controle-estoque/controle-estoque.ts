import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-estoque',
  standalone: false,
  styleUrl: './controle-estoque.css',
  templateUrl: './controle-estoque.html',
})
export class ControleEstoque {
  nomeProduto: string = 'Teclado Mecânico RGB';
  estoque: number = 5;

  adicionar(): void {
    this.estoque++;
  }

  remover(): void {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
