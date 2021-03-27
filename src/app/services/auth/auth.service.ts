import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(environment.domain + 'api-token-auth/',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  saveClientIntoLS(client: Cliente) {
    localStorage.setItem('client', JSON.stringify(client));
  }

  deleteClientIntoLS() {
    localStorage.removeItem('client');
  }

  getClientIntoLS() {
    return JSON.parse(localStorage.getItem('client'));
  }
}
