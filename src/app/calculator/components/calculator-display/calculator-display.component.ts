import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-calculator-display',
    templateUrl: './calculator-display.component.html',
    styleUrls: ['./calculator-display.component.css'],
  })
  export class CalculatorDisplayComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }

    @Input() display: string = '0'

    @Input() displayHistory: string = ''


    
  }