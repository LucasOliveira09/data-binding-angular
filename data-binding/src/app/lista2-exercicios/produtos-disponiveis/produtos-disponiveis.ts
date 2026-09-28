import { Component } from '@angular/core';
      export interface Produto {
        id: number;
        nome: string;
        preco: number;
        quantidade: number;
      }
      @Component({
        selector: 'app-produtos-disponiveis',
        standalone: false,
        styleUrl: './produtos-disponiveis.css',
        templateUrl: './produtos-disponiveis.html',
      })
      export class ProdutosDisponiveis {
        // Propriedade booleana exigida pelo enunciado
        somenteDisponiveis: boolean = false;
        produtos: Produto[] = [
          { id: 1, nome: 'Teclado Mecânico', preco: 250.0, quantidade: 10 },
          { id: 2, nome: 'Mouse Gamer', preco: 120.5, quantidade: 0 },  // Sem estoque
          { id: 3, nome: 'Monitor 24"', preco: 899.9, quantidade: 5 },
          { id: 4, nome: 'Headset Sem Fio', preco: 349.9, quantidade: 0 }, // Sem estoque
          { id: 5, nome: 'Mousepad Extra Grande', preco: 65.0, quantidade: 8 },
        ];
      }
