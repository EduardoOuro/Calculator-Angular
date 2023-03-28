import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  visibleSidebar5!: boolean;

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  returnTicTacToe() {
    this.router.navigateByUrl('/tic-tac-toe/tic-tac-toe');
  }
  returnCalculator() {
    this.router.navigateByUrl('/calculator/calculator');
  }
}
