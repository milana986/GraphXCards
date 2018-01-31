import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent, NavbarComponent],
  exports: [NavbarComponent]   //ubaciti navbar il sta vec   //ako zatreba: "../node_modules/font-awesome/css/font-awesome.css"
})
export class CoreModule { }   
