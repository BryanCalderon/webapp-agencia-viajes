import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract/abstractService';

const routes = {
  endpoint: () => `departamentos/`,
  byId: (id: Number) => routes.endpoint() + `${id}/`,
  cities: (id: Number) => routes.endpoint() + `${id}/cities/`,
};

export interface Departamento {
  id: String,
  nombre: String,
  pais: any
}

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService extends AbstractService<Departamento>{

  get(): Observable<any> {
    return super.get(routes.endpoint());
  }

  getCities(id: Number): Observable<any> {
    return super.get(routes.cities(id));
  }
}
