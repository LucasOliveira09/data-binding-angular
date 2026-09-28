import { Component } from '@angular/core';
      export type Prioridade = 'baixa' | 'media' | 'alta';
      export interface Tarefa {
        id: number;
        titulo: string;
        responsavel: string;
        prioridade: Prioridade;
        concluida: boolean;
      }
      @Component({
        selector: 'app-lista-tarefas',
        standalone: false,
        styleUrl: './lista-tarefas.css',
        templateUrl: './lista-tarefas.html',
      })
      export class ListaTarefas {
        tarefas: Tarefa[] = [
          { id: 1, titulo: 'Configurar Docker no VPS', responsavel: 'Lucas', prioridade: 'alta', concluida: true
       },
          { id: 2, titulo: 'Ajustar rotas de autenticação', responsavel: 'Caio', prioridade: 'alta', concluida:
      false },
          { id: 3, titulo: 'Desenhar layout do dashboard', responsavel: 'Gabriel', prioridade: 'media',
      concluida: false },
          { id: 4, titulo: 'Criar testes unitários', responsavel: 'Lucas', prioridade: 'baixa', concluida: true
      },
          { id: 5, titulo: 'Integrar API do WhatsApp (WAHA)', responsavel: 'Caio', prioridade: 'alta',
      concluida: false },
          { id: 6, titulo: 'Revisar documentação da sprint', responsavel: 'Gabriel', prioridade: 'baixa',
      concluida: false },
        ];
        // 5. Alterna o estado da tarefa
        alternarSituacao(tarefa: Tarefa): void {
          tarefa.concluida = !tarefa.concluida;
        }
        // 6. Total de tarefas
        get totalTarefas(): number {
          return this.tarefas.length;
        }
        // 7. Total concluídas
        get totalConcluidas(): number {
          return this.tarefas.filter(t => t.concluida).length;
        }
        // 7. Total pendentes
        get totalPendentes(): number {
          return this.tarefas.filter(t => !t.concluida).length;
        }
      } 
