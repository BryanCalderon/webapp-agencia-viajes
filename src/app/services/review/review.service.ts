import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract/abstractService';

const routes = {
  endpoint: () => `reviews/`,
  byId: (id: Number) => routes.endpoint() + `${id}/`,
  byPlan: (id: Number) => routes.endpoint() + `plan/${id}/`,
};

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
export class ReviewService extends AbstractService<Review> {

  getByPlan(planId: Number): Observable<any> {
    return super.get(routes.byPlan(planId));
  }
}
