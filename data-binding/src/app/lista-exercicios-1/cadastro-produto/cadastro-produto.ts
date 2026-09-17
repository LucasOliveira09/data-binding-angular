import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  standalone: false,
  styleUrl: './cadastro-produto.css',
  templateUrl: './cadastro-produto.html',
})
export class CadastroProduto {
  produto: string = 'Mouse Gamer';
  preco: number = 150;
  quantidade: number = 2;

  get total(): number {
    return (this.preco || 0) * (this.quantidade || 0);
  }
}
