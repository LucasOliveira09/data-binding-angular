import { Component } from '@angular/core';

@Component({
  selector: 'app-login-simulado',
  standalone: false,
  styleUrl: './login-simulado.css',
  templateUrl: './login-simulado.html',
})
export class LoginSimulado {
  usuario: string = '';
  senha: string = '';
  mensagemBoasVindas: string = '';

  entrar(): void {
    this.mensagemBoasVindas = `Bem-vindo, ${this.usuario}!`;
  }
}
