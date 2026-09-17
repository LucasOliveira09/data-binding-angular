import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-completo',
  standalone: false,
  styleUrl: './contador-completo.css',
  templateUrl: './contador-completo.html',
})
export class ContadorCompleto {
  quantidade: number = 0;

  incrementar(): void {
    this.quantidade++;
  }

  decrementar(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
