import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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
export class HotelService {
  endpoint = "hotel";
  constructor(private http: HttpClient) { }

  getByCity(cityId: String): Observable<any> {
    return this.http.get(environment.domain + this.endpoint + `/byCity/${cityId}/`);
  }
}
