import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicTacToeComponent } from './tic-tac-toe.component';

import { TicTacToeRoutingComponent } from './tic-tac-toe-routing.component';

export const TicTacToeRoutes: Routes = [
    {
		path: '',
		component: TicTacToeRoutingComponent,
		children: [
		  {
			path: 'tic-tac-toe', 
			component: TicTacToeComponent 
		  }
		]
	}
];

@NgModule({
    imports: [
      RouterModule.forChild(TicTacToeRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class  TicTacToeRoutingModule { }

