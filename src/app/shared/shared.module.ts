import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { CiudadService } from './services/ciudad/ciudad.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './components/datepicker/datepicker.component';



@NgModule({
  declarations: [
    AppNavbarComponent,
    FooterComponent,
    SearcherComponent,
    DatepickerComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
  ],
  exports: [
    AppNavbarComponent,
    FooterComponent,
    SearcherComponent,
    DatepickerComponent,
  ],
  providers: [CiudadService],
})
export class SharedModule { }
