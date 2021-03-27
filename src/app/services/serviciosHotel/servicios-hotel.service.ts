import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosHotelService {
  
  endpoint = "hotel-servicio";

  constructor(private httpClient: HttpClient) { }

  getByhotel(hotelId: number): Observable<any> {
    return this.httpClient.get(environment.domain + this.endpoint + `/getByHotel/${hotelId}/`);
  }
}
