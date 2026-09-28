import { Component } from '@angular/core';

export interface Produto {
        id: number;
        nome: string;
        preco: number;
        quantidade: number;
      } 
@Component({
  selector: 'app-interface-produtos',
  standalone: false,
  styleUrl: './interface-produtos.css',
  templateUrl: './interface-produtos.html',
})
export class InterfaceProdutos {
  produtos: Produto[] = [
          { id: 1, nome: 'Teclado Mecânico', preco: 250.00, quantidade: 10 },
          { id: 2, nome: 'Mouse Gamer', preco: 120.50, quantidade: 15 },
          { id: 3, nome: 'Monitor 24 Polegadas', preco: 899.90, quantidade: 5 },
          { id: 4, nome: 'Headset Sem Fio', preco: 349.99, quantidade: 8 },
          { id: 5, nome: 'Mousepad Extra Grande', preco: 65.00, quantidade: 25 }
        ];
}
