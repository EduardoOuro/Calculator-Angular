import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorComponent } from './components';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';
import { CalculatorRoutingComponent } from './calculator-routing.component';

export const CalculatorRoutes: Routes = [
	{
		path: '',
		component: CalculatorRoutingComponent,
		children: [
		  {
			path: 'calculator', 
			component: CalculatorComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(CalculatorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CalculatorRoutingModule {
}
