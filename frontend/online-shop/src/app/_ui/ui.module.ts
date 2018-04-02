import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerButtonComponent } from './buttons/hamburger-button/hamburger-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HamburgerButtonComponent
  ],
  exports: [
    HamburgerButtonComponent
  ]
})
export class UiModule { }
