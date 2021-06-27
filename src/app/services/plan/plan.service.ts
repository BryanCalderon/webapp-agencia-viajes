import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../../entities/Plan';
import { AbstractService } from '../abstract/abstractService';

const routes = {
    endpoint: () => `planes/`,
    byId: (id: Number) => routes.endpoint() + `${id}/`,
};

export interface PlanContext {
    id: Number;
}

@Injectable({
    providedIn: 'root'
})
export class PlanService extends AbstractService<Plan> {


    create(plan: Plan): Observable<any> {
        return super.persist(routes.endpoint(), plan);
    }

    get(pagination?): Observable<any> {
        return super.get(routes.endpoint(), pagination);
    }

    getById(id: Number): any {
        return super.get(routes.byId(id));
    }
}