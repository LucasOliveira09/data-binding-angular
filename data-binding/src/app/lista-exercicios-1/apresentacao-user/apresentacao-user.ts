import { Component } from '@angular/core';


@Component({
  selector: 'app-apresentacao-user',
  standalone: false,
  styleUrl: './apresentacao-user.css',
  templateUrl: './apresentacao-user.html',
})
export class ApresentacaoUser {
  nome: string = '';
  idade: string = '';
  curso: string = '';
}
