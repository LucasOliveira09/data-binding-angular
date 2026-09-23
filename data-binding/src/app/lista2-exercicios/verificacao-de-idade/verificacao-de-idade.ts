import { Component } from '@angular/core';

@Component({
  selector: 'app-verificacao-de-idade',
  standalone: false,
  styleUrl: './verificacao-de-idade.css',
  templateUrl: './verificacao-de-idade.html',
})
export class VerificacaoDeIdade {
  idade : number = 0;
  mensagem : string = '';

  validaIdade(): void {
    if(this.idade <= 0){
      return
    }

    if (this.idade <= 12) {
      this.mensagem = 'Criança';
    } else if (this.idade > 12 && this.idade <= 17){
      this.mensagem = 'Adolescente';
    } else if (this.idade >= 60){
      this.mensagem = 'Idoso'
    } else if (this.idade > 17 && this.idade < 60) {
      this.mensagem = 'Adulto'
    }
  }

}
