import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { TicTacToeService } from './services';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: './tic-tac-toe.component.html',
    styleUrls: ['./tic-tac-toe.component.css']
})

export class TicTacToeComponent implements OnInit {

    constructor(
        private ticTacToeService: TicTacToeService,
        private router: Router
        ) { }

    ngOnInit(): void {
        this.ticTacToeService.inicializar();
    }

    get showInicio(): boolean {
        return this.ticTacToeService.showInicio;
    }

    get showTabuleiro(): boolean {
        return this.ticTacToeService.showTabuleiro
    }

    get showFinal(): boolean {
        return this.ticTacToeService.showFinal;
    }

    iniciarJogo(): void {
        this.ticTacToeService.iniciarJogo();
    }

    jogar(posX: number, posY: number): void {
        this.ticTacToeService.jogar(posX, posY)
    }
    exibirX(posX: number, posY: number): boolean {
        return this.ticTacToeService.exibirX(posX, posY);
    }

    exibirO(posX: number, posY: number): boolean {
        return this.ticTacToeService.exibirO(posX, posY)
    }

    exibirVitoria(posX: number, posY: number): boolean {
        return this.ticTacToeService.exibirVitoria(posX, posY);
    }

    get jogador(): number {
        return this.ticTacToeService.jogador;
    }

    novoJogo(): void {
        this.ticTacToeService.novoJogo();
    }

    // returnShelf() {
    //     this.router.navigateByUrl('/tic-tac-toe/tic-tac-toe');
    //   }

}