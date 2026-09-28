import { Component } from '@angular/core';
      export interface Produto {
        id: number;
        nome: string;
        quantidade: number;
      }
      @Component({
        selector: 'app-cadastro-simplificado',
        standalone: false,
        styleUrl: './cadastro-simplificado.css',
        templateUrl: './cadastro-simplificado.html',
      })
      export class CadastroSimplificado {
        // Campos do formulário vinculados ao [(ngModel)]
        novoNome: string = '';
        novaQuantidade: number | null = null;
        // Mensagem de validação
        mensagemErro: string = '';
        // Lista inicial de produtos
        produtos: Produto[] = [
          { id: 1, nome: 'Teclado Mecânico', quantidade: 8 },
          { id: 2, nome: 'Mouse Sem Fio', quantidade: 14 }
        ];
        cadastrarProduto(): void {
          // 1. Validação: nome não pode ser vazio (ignora espaços em branco)
          if (!this.novoNome || this.novoNome.trim() === '') {
            this.mensagemErro = 'Preencha o nome do produto!';
            return;
          }
          // 2. Validação: quantidade precisa ser preenchida e >= 0
          if (this.novaQuantidade === null || this.novaQuantidade < 0) {
            this.mensagemErro = 'A quantidade deve ser maior ou igual a zero!';
            return;
          }
          // 3 e 5. Cria o produto e adiciona à lista (atualiza a tela automaticamente)
          const novoProduto: Produto = {
            id: Date.now(), // Gera um ID único simples
            nome: this.novoNome.trim(),
            quantidade: Number(this.novaQuantidade)
          };
          this.produtos.push(novoProduto);
          // 4. Limpa os campos e a mensagem de erro após o sucesso
          this.novoNome = '';
          this.novaQuantidade = null;
          this.mensagemErro = '';
        }
        // 7. Método para excluir pelo índice
        excluirProduto(index: number): void {
          this.produtos.splice(index, 1);
        }
      }
