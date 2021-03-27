import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Cliente {
  nombres: String,
  apellidos: String,
  identificacion: String,
  email: String,
  telefono: String,
  uid?: String,
  fecha_nacimiento?: String
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  create(cliente: Cliente): Observable<any> {
    return this.http.post(environment.domain + 'clientes/',
      cliente,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }
    );
  }

  getByUID(uid: String): Observable<any> {
    return this.http.get(environment.domain + `clientes/byUid/${uid}/`);
  }
}
