import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './components';
import { CalculatorService } from './services';
import { CalculatorRoutingModule } from './calculator.module.routing';
import { CalculatorRoutingComponent } from './calculator-routing.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display.component';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  declarations: [
  	CalculatorComponent,
  	CalculatorRoutingComponent,
    CalculatorButtonComponent,
    CalculatorDisplayComponent
  ],
  providers: [
  	CalculatorService
  ]
})
export class CalculatorModule { }
