import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract/abstractService';

const routes = {
  endpoint: () => `hotel/`,
  byCity: (id: Number | String) => routes.endpoint() + `byCity/${id}/`,
};

export interface Hotel {
  nombre: String,
  descripcion: String,
  url: String,
  imagen: String,
  categoria: String,
  ciudad: String,
  servicios?: String
}


@Injectable({
  providedIn: 'root'
})
export class HotelService extends AbstractService<Hotel> {

  getByCity(cityId: String): Observable<any> {
    return super.get(routes.byCity(cityId));
  }
}
