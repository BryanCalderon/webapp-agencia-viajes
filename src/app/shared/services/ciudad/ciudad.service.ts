import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Ciudad { id: number, name: string };

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) { }

  public getCities(): Observable<any> {
    return this.http.get("./assets/cities.json");
  }
}
