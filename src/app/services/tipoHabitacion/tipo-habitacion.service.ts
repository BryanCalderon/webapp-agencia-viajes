import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract/abstractService';

const routes = {
  endpoint: () => `hotel-tipo-habitacion/`,
  byId: (id: Number) => routes.endpoint() + `${id}/`,
  byHotel: (id: Number) => routes.endpoint() + `getByHotel/${id}/`,
};

@Injectable({
  providedIn: 'root'
})
export class TipoHabitacionService extends AbstractService<any>{

  getByhotel(hotelId: number): Observable<any> {
    return super.get(routes.byHotel(hotelId));
  }
}
