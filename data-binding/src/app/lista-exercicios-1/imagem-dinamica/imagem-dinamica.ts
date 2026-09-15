import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem-dinamica',
  standalone: false,
  styleUrl: './imagem-dinamica.css',
  templateUrl: './imagem-dinamica.html',
})
export class ImagemDinamica {
  imagemProduto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh22nlp9q5I1j7zUbVNYMcBbO5RufjupzjFoNHmvtn3-cPlIDHYkWPzU&s=10';

  descricaoImagem: string = 'Haaland NEgao do curintia';
}
