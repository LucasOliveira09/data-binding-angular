import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho-compras',
  standalone: false,
  styleUrl: './carrinho-compras.css',
  templateUrl: './carrinho-compras.html',
})
export class CarrinhoCompras {
  nomeProduto: string = 'Mouse Gamer';
  preco: number = 120;
  quantidade: number = 1;
  mensagemCarrinho: string = '';

  get total(): number {
    return this.preco * this.quantidade;
  }

  incrementar(): void {
    this.quantidade++;
  }

  decrementar(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    this.mensagemCarrinho = `${this.quantidade}x ${this.nomeProduto} adicionado(s) ao carrinho com sucesso! (Total: R$ ${this.total.toFixed(2)})`;
  }
}
