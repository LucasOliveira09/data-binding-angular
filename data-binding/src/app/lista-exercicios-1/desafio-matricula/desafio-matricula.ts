import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-matricula',
  standalone: false,
  styleUrl: './desafio-matricula.css',
  templateUrl: './desafio-matricula.html',
})
export class DesafioMatricula {
  nomeAluno: string = '';
  disciplinas: number = 1;
  mensagemMatricula: string = '';

  incrementar(): void {
    this.disciplinas++;
  }

  decrementar(): void {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula(): void {
    this.mensagemMatricula = `Matrícula confirmada para ${this.nomeAluno} em ${this.disciplinas} disciplina(s)!`;
  }
}
