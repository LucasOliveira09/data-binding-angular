import { Component } from '@angular/core';
      // Status permitidos
      export type StatusProjeto = 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';
      export interface Projeto {
        id: number;
        titulo: string;
        equipe: string;
        nota: number | null; // null quando não definida
        status: StatusProjeto;
        entregue: boolean;
      }
      @Component({
        selector: 'app-desafio-final-2',
        standalone: false, // ajuste para true se seu componente for standalone
        styleUrl: './desafio-final-2.css',
        templateUrl: './desafio-final-2.html',
      })
      export class DesafioFinal2 {
        // Lista de status disponíveis para o select de alteração (Requisito 10)
        listaStatus: StatusProjeto[] = ['planejamento', 'desenvolvimento', 'testes', 'concluído'];
        // 9. Controle para ocultar ou exibir projetos concluídos
        ocultarConcluidos: boolean = false;
        // 1 e 3. Projetos cadastrados
        projetos: Projeto[] = [
          {
            id: 1,
            titulo: 'SaaS ViziHub - Gerador de Sites',
            equipe: 'Lucas, Caio, Gabriel',
            nota: 9.5, // >= 7 (destaque positivo)
            status: 'concluído',
            entregue: true,
          },
          {
            id: 2,
            titulo: 'App de Gestão com WAHA WhatsApp',
            equipe: 'Lucas e Caio',
            nota: 7.0, // >= 7 (destaque positivo)
            status: 'desenvolvimento',
            entregue: false,
          },
          {
            id: 3,
            titulo: 'Simulador de Financiamento Habitacional',
            equipe: 'Muniz e Souza',
            nota: 5.5, // < 6 (sinalização de atenção)
            status: 'testes',
            entregue: true,
          },
          {
            id: 4,
            titulo: 'Automação de Relatórios em Nuvem',
            equipe: 'Amanda e Pedro',
            nota: null, // Nota indefinida
            status: 'planejamento',
            entregue: false,
          },
          {
            id: 5,
            titulo: 'Plataforma E-commerce Local',
            equipe: 'Beatriz, João, Carlos',
            nota: 4.0, // < 6 (sinalização de atenção)
            status: 'desenvolvimento',
            entregue: false,
          },
        ];
        // 11. Quantidade total de projetos
        get totalProjetos(): number {
          return this.projetos.length;
        }
        // 12. Quantidade de projetos concluídos
        get totalConcluidos(): number {
          return this.projetos.filter((p) => p.status === 'concluído').length;
        }
        // 10. Método auxiliar para alternar status (ou pode alterar via [(ngModel)] direto no select)
        atualizarStatus(projeto: Projeto, novoStatus: StatusProjeto): void {
          projeto.status = novoStatus;
        }
      }
