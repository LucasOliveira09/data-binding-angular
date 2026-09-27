import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-nomes',
  standalone: false,
  styleUrl: './lista-nomes.css',
  templateUrl: './lista-nomes.html',
})
export class ListaNomes {
  nomes = [
    {id: 1, nome: "lucas", posicao: 1},
    {id: 2, nome: "Luiz", posicao: 2},
    {id: 3, nome: "Muniz", posicao: 3},
    {id: 4, nome: "Guilherme", posicao: 4},
    {id: 5, nome: "Otavio", posicao: 5}
  ]
}
