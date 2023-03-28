import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () =>
      import('./calculator/calculator.module').then((m) => m.CalculatorModule),
  },
  {
    path: 'tic-tac-toe',
    loadChildren: () =>
    import('./tic-tac-toe/tic-tac-toe.module').then((m) => m.TicTacToeModule), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
