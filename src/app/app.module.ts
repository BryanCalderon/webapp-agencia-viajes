import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearcherPlanComponent } from './components/searcher-plan/searcher-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { PlanModule } from './pages/planes/plan.module';
import { LoginComponent } from './pages/login/login.component';
import { PasswordComponent } from './pages/password/password.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardActivateService } from './services/auth/auth-guard-activate.service';
import { AuthGuardDeactivateService } from './services/auth/auth-guard-deactivate.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ClienteService } from './services/cliente/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    SearcherPlanComponent,
    HomeComponent,
    LoginComponent,
    PasswordComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    PlanModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuardActivateService, AuthGuardDeactivateService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
