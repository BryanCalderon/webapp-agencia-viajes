import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract/abstractService';


const routes = {
  clientes: () => `clientes/`,
  cliente: (id: Number) => routes.clientes() + `${id}/`,
  byUid: (id: Number | String) => routes.clientes() + `byUid/${id}/`,
};
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
export class ClienteService extends AbstractService<Cliente> {

  create(cliente: Cliente): Observable<any> {
    return super.persist(routes.clientes(), cliente);
  }

  getByUID(uid: String): Observable<any> {
    return super.get(routes.byUid(uid));
  }
}
