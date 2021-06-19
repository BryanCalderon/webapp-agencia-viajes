import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract/abstractService';


export interface Ciudad {
  id: number,
  name: string
};

@Injectable({
  providedIn: 'root'
})
export class CiudadService extends AbstractService<Ciudad> {

  public get(): Observable<any> {
    return super.getPath("./assets/cities.json");
  }
}
