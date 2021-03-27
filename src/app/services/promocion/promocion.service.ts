import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Promocion {
  titulo: String,
  descripcion: String,
  imagen: String,
  plan: any
}


@Injectable({
  providedIn: 'root'
})
export class PromocionService {
  endpoint = "promocion";
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(environment.domain + this.endpoint + '/');
  }
}
