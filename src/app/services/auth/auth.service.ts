import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract/abstractService';
import { Cliente } from '../cliente/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService<any> {

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return super.post('api-token-auth/', body.toString(), () => { });
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
