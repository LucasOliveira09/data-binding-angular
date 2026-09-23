import { Component } from '@angular/core';

@Component({
  selector: 'app-exebicao-de-mensagem',
  standalone: false,
  styleUrl: './exebicao-de-mensagem.css',
  templateUrl: './exebicao-de-mensagem.html',
})
export class ExebicaoDeMensagem {
  mensagemVisivel: boolean = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
