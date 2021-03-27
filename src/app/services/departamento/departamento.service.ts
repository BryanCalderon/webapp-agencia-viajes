import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Departamento {
  id: String,
  nombre: String,
  pais: any
}

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  endpoint = "departamentos";
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(environment.domain + this.endpoint + `/`);
  }

  getCities(id: Number): Observable<any> {
    return this.http.get(environment.domain + this.endpoint + `/${id}/cities/`);
  }
}
