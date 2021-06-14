import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



export interface Review {
  comentario: String,
  created: Date,
  calificacion: any,
  plan?: any,
  cliente?: any,
}


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  endpoint = "reviews";
  constructor(private http: HttpClient) { }

  getByPlan(planId: Number): Observable<any> {
    return this.http.get(environment.domain + this.endpoint + `/plan/${planId}/`);
  }
}
