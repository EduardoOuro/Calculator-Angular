import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-calculator-button',
    templateUrl: './calculator-button.component.html',
    styleUrls: ['./calculator-button.component.css']
  })
  export class CalculatorButtonComponent implements OnInit {
  
    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    constructor() { }
  
    ngOnInit() {
    }

    click(value: number) {
     this.modelChange.emit(value)
    }
  
  }