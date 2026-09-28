import { Component } from '@angular/core';
      export interface Produto {
        id: number;
        nome: string;
        preco: number;
        quantidade: number;
        promocao: boolean; // 1. Nova propriedade booleana
      }
      @Component({
        selector: 'app-promocao-produtos',
        standalone: false,
        styleUrl: './promocao-produtos.css',
        templateUrl: './promocao-produtos.html',
      })
      export class PromocaoProdutos {
        produtos: Produto[] = [
          { id: 1, nome: 'Teclado Mecânico', preco: 250.0, quantidade: 10, promocao: true },
          { id: 2, nome: 'Mouse Gamer', preco: 120.5, quantidade: 3, promocao: false },
          { id: 3, nome: 'Monitor 24"', preco: 899.9, quantidade: 5, promocao: false },
          { id: 4, nome: 'Headset Sem Fio', preco: 349.9, quantidade: 8, promocao: true },
          { id: 5, nome: 'Cabo HDMI', preco: 29.9, quantidade: 12, promocao: false },
        ];
        // 4. Método para alternar promoção (toggle)
        alternarPromocao(produto: Produto): void {
          produto.promocao = !produto.promocao;
        }
      }
