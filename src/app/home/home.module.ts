import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutes } from './home.routing';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SidebarModule,
    ButtonModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }