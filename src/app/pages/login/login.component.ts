import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { default as firebase } from 'firebase/app';
import { ClienteService } from '../../services/cliente/cliente.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _success = new Subject<string>();
  errorMessage = '';

  constructor(
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private clienteService: ClienteService,
    private authService: AuthService
  ) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
    this.firebaseAuth.user.subscribe(user => {
      if (user) {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        })
      }
    });

    this._success.subscribe(message => this.errorMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = '');
  }

  login() {
    this.firebaseAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(user => {

      this.clienteService.getByUID(user.user.uid).subscribe(client => this.authService.saveClientIntoLS(client));
      this.router.navigate(['/home']);

    }).catch(response => {
      this._success.next(response.message);
    });
  }

  async loginWithGoogle() {
    await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
