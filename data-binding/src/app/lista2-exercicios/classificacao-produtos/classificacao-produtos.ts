import { Component } from '@angular/core';
      export interface Produto {
        id: number;
        nome: string;
        preco: number;
        quantidade: number;
      }
      @Component({
        selector: 'app-classificacao-produtos',
        standalone: false,
        styleUrl: './classificacao-produtos.css',
        templateUrl: './classificacao-produtos.html',
      })
      export class ClassificacaoProdutos {
        produtos: Produto[] = [
          { id: 1, nome: 'Teclado Mecânico', preco: 250.0, quantidade: 10 }, // > 5 (Verde)
          { id: 2, nome: 'Mouse Gamer', preco: 120.5, quantidade: 3 },       // 1 a 5 (Amarelo)
          { id: 3, nome: 'Monitor 24"', preco: 899.9, quantidade: 0 },       // 0 (Vermelho)
          { id: 4, nome: 'Headset Sem Fio', preco: 349.9, quantidade: 5 },   // 1 a 5 (Amarelo)
          { id: 5, nome: 'Cabo HDMI', preco: 29.9, quantidade: 0 }          // 0 (Vermelho)
        ];
      }
