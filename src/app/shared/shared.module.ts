import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppNavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
