import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { PlanService, Plan } from '../service/plan.service';
import * as PlanActions from './plan.action';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class PlanEffect {
    constructor(private actions: Actions, private services: PlanService) { }

    @Effect()
    createPlan = this.actions.pipe(
        ofType(PlanActions.CREATE_PLAN),
        map((action: PlanActions.CreatePlan) => action.payload),
        mergeMap(payload => this.services.create(payload)),
        map((reponse) => new PlanActions.CreatePlanSucces(reponse)),
        catchError((error) => [new PlanActions.CreatePlanError(error)])
    );

    @Effect()
    getPlanes = this.actions.pipe(
        ofType<PlanActions.GetPlanes>(PlanActions.GET_PLANES),
        switchMap(() => this.services.get()),
        map((planes: Plan[]) => new PlanActions.GetPlanesSucces(planes)),
        catchError((error) => [new PlanActions.GetPlanesError(error)])
    );
}