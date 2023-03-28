import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  private numero1?: string;
  private numero2?: string;
  private resultado?: number;
  private operation?: string;
  displayValue: string = '0';
  displayHistory: string = ''

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.clearDisplay();
  }

  clearDisplay(): void {
    this.displayValue = '0';
    this.numero1 = '';
    this.numero2 = '';
    this.resultado = 0;
    this.operation = '';
    this.displayHistory = '';
  }

  clickButton(event: any) {
    if (event.target.innerText == 'AC') {
      this.clearDisplay();
    } else if (event.target.innerText == '/') {
      this.defineOperation(event.target.innerText, '/');
    } else if (event.target.innerText == '*') {
      this.defineOperation(event.target.innerText, '*');
    } else if (event.target.innerText == '-') {
      this.defineOperation(event.target.innerText, '-');
    } else if (event.target.innerText == '+') {
      this.defineOperation(event.target.innerText, '+');
    } else if (event.target.innerText == '=') {
      this.defineOperation(event.target.innerText, '=');
    } else {
      this.adicionarNumero(event.target.innerText);
    }
    this.adicionarHistoricoNumero(event.target.innerText);
  }
  defineOperation(e: any, signal: string) {
    if (signal !== '=') {
      this.operation = e;
      this.displayValue = signal;
    } else {
     var result = this.calculatorService.calcular(
        parseFloat(this.numero1 as string),
        parseFloat(this.numero2 as string),
        this.operation as string
        
      );
      this.displayValue = `${result}`;
      this.numero1 = `${result}`;
      this.numero2 = '',
      this.operation = ''

    }
    
  }

  adicionarNumero(numero: string): void {
    if (this.operation === '') {
      this.numero1 = this.concatenarNumero(this.numero1 as string, numero);
      this.displayValue = this.numero1;
    } else {
      this.numero2 = this.concatenarNumero(this.numero2 as string, numero);
      this.displayValue = this.numero2
    }
  }

  adicionarHistoricoNumero(numero: string): void {
    if (numero !== 'AC') {
      if (numero !== '=') {
      this.displayHistory = this.concatenarNumero(this.displayHistory, numero)
      } else  {
        this.displayHistory = ` RESULTADO => ${this.displayValue}`
      }
    }
      
  
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculatorService.calcular(
      parseFloat(this.numero1 as string),
      parseFloat(this.numero2 as string),
      this.operation as string
    );
  }
}
