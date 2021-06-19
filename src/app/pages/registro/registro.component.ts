import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente, ClienteService } from '../../services/cliente/cliente.service';
import { AuthService } from '../../services/auth/auth.service';
import { UtilService } from '../../utils/util.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css', '../login/login.component.css']
})
export class RegistroComponent implements OnInit {

  _success = new Subject<string>();
  errorMessage = '';
  minDate = { year: 1950, month: 1, day: 1 }

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private authService: AuthService,
    public utilService: UtilService
  ) { }

  loginForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    identificacion: ['', Validators.required],
    fecha_nacimiento: [''],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    telefono: ['', Validators.required]
  });

  ngOnInit(): void {
    this._success.subscribe(message => this.errorMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = '');
  }

  createUser() {
    if (this.loginForm.value.password == this.loginForm.value.confirmPassword) {
      this.afAuth.createUserWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(response => {
        response.user.updateProfile({ displayName: [this.loginForm.value.nombres, this.loginForm.value.apellidos].join(" ") }).then(() => {
          let cliente: Cliente = this.buildClient(response);
          this.clienteService.create(cliente).subscribe(client => {
            this.authService.saveClientIntoLS(client);
            this.router.navigate(['/home']);
          });
        }).catch(response => this._success.next(response.message))
      }).catch(response => this._success.next(response.message));
    } else {
      this.loginForm.patchValue({ password: '', confirmPassword: '' });
      this._success.next("Las contraseñas no coinciden");
    }
  }

  buildClient(response) {
    return {
      nombres: this.loginForm.value.nombres,
      apellidos: this.loginForm.value.apellidos,
      identificacion: this.loginForm.value.identificacion,
      telefono: this.loginForm.value.telefono,
      fecha_nacimiento: this.utilService.convertToDate(this.loginForm.value.fecha_nacimiento),
      email: this.loginForm.value.email,
      uid: response.user.uid
    };
  }

}
