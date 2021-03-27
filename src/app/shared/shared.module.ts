import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { AppRoutingModule } from '../app-routing.module';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    AppNavbarComponent,
    FooterComponent,
    SearcherComponent,
    DatepickerComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    AppNavbarComponent,
    FooterComponent,
    SearcherComponent,
    DatepickerComponent,
    ToastComponent
  ],
  providers: [],
})
export class SharedModule { }
