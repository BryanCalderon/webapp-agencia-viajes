import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
export class ComprasService {

  endpoint = "compra/"

  constructor(private httpClient: HttpClient) { }

  persist(compra: Compra) {
    return this.httpClient.post(environment.domain + this.endpoint, compra);
  }

}
