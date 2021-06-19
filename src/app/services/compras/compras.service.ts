import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract/abstractService';

const routes = {
  compras: () => `compra/`,
  compra: (id: Number) => routes.compras() + `${id}/`,
};
export interface Compra {
  fecha_ida: any,
  fecha_regreso: any,
  precio: number,
  plan: any,
  cliente: any,
  ciudad: any,
  hotel: any,
  tipo_habitacion: any,
  servicios: any[],
  referidos: any[]
}

@Injectable({
  providedIn: 'root'
})
export class ComprasService extends AbstractService<Compra>{

  endpoint = "compra/"

  create(compra: Compra) {
    return super.persist(routes.compras(), compra);
  }

}
