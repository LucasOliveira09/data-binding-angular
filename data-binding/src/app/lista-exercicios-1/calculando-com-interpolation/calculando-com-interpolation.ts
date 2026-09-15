import { Component } from '@angular/core';

@Component({
  selector: 'app-calculando-com-interpolation',
  standalone: false,
  styleUrl: './calculando-com-interpolation.css',
  templateUrl: './calculando-com-interpolation.html',
})
export class CalculandoComInterpolation {
produto: string = 'Teclado';
preco: number = 150;
quantidade: number = 3;

}
