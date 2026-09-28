import { Component } from '@angular/core';

@Component({
  selector: 'app-cores-alternadas',
  standalone: false,
  styleUrl: './cores-alternadas.css',
  templateUrl: './cores-alternadas.html',
})
export class CoresAlternadas {
  disciplinas: string[] = [
          'Algoritmos e Estruturas de Dados',
          'Banco de Dados',
          'Engenharia de Software',
          'Redes de Computadores',
          'Sistemas Operacionais',
          'Inteligência Artificial'
        ];
}
