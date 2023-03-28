import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeService } from './services';
import { TicTacToeRoutingComponent } from './tic-tac-toe-routing.component';
import { TicTacToeRoutingModule } from './tic-tac-toe.module.routing';

@NgModule({
    imports: [
        CommonModule,
        TicTacToeRoutingModule
    ],
    declarations: [
        TicTacToeComponent,
        TicTacToeRoutingComponent
    ],
    providers: [
        TicTacToeService
    ]
})
export class TicTacToeModule { }