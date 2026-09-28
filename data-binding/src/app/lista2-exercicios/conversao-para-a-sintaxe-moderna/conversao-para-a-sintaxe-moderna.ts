import { Component } from '@angular/core';
      // Interfaces para tipagem dos dados
      export interface Usuario {
        id: number;
        nome: string;
      }
      export interface Produto {
        id: number;
        nome: string;
        quantidade: number;
      }
      export interface Tarefa {
        id: number;
        titulo: string;
        responsavel: string;
        concluida: boolean;
      }
      @Component({
        selector: 'app-conversao-para-a-sintaxe-moderna',
        standalone: false, // ajuste para true se for standalone no seu projeto
        styleUrl: './conversao-para-a-sintaxe-moderna.css',
        templateUrl: './conversao-para-a-sintaxe-moderna.html',
      })
      export class ConversaoParaASintaxeModerna {
        // 1. Dados do Exercício 6 (Lista de Nomes)
        nomes: Usuario[] = [
          { id: 1, nome: 'Lucas' },
          { id: 2, nome: 'Luiz' },
          { id: 3, nome: 'Muniz' },
          { id: 4, nome: 'Guilherme' },
          { id: 5, nome: 'Otavio' },
        ];
        removerUsuario(): void {
          if (this.nomes.length > 0) {
            this.nomes.splice(this.nomes.length - 1, 1);
          }
        }
        removerTodos(): void {
          this.nomes = [];
        }
        // 2. Dados do Exercício 11 (Filtro de Produtos)
        somenteDisponiveis: boolean = false;
        produtos: Produto[] = [
          { id: 101, nome: 'Teclado Mecânico', quantidade: 8 },
          { id: 102, nome: 'Mouse Gamer', quantidade: 0 },
          { id: 103, nome: 'Monitor 24"', quantidade: 4 },
          { id: 104, nome: 'Headset Sem Fio', quantidade: 0 },
          { id: 105, nome: 'Cabo HDMI 2.0', quantidade: 15 },
        ];
        // 3. Dados do Exercício 13 (Tarefas)
        tarefas: Tarefa[] = [
          { id: 1, titulo: 'Configurar Docker na VPS', responsavel: 'Lucas', concluida: true },
          { id: 2, titulo: 'Ajustar rotas de autenticação', responsavel: 'Caio', concluida: false },
          { id: 3, titulo: 'Desenhar layout do dashboard', responsavel: 'Gabriel', concluida: false },
          { id: 4, titulo: 'Escrever testes unitários', responsavel: 'Lucas', concluida: true },
          { id: 5, titulo: 'Integrar Webhook do Stripe', responsavel: 'Caio', concluida: false },
        ];
        alternarSituacao(tarefa: Tarefa): void {
          tarefa.concluida = !tarefa.concluida;
        }
        get totalTarefas(): number {
          return this.tarefas.length;
        }
        get totalConcluidas(): number {
          return this.tarefas.filter((t) => t.concluida).length;
        }
        get totalPendentes(): number {
          return this.tarefas.filter((t) => !t.concluida).length;
        }
      }
