import { Action } from '@ngrx/store';
import { Plan } from '../../../entities/Plan';

export const CREATE_PLAN = '[CREATE] Plan';
export const CREATE_PLAN_SUCCESS = '[CREATE] Plan Success';
export const CREATE_PLAN_ERROR = '[CREATE] Plan Error';

export const GET_PLANES = '[ALL] Planes';
export const GET_PLANES_SUCCESS = '[ALL] Planes Success';
export const GET_PLANES_ERROR = '[PLANES] Planes Error';

export class CreatePlan implements Action {
    readonly type = CREATE_PLAN;

    constructor(public payload: Plan) { }
}

export class CreatePlanSucces implements Action {
    readonly type = CREATE_PLAN_SUCCESS;
    constructor(public payload: Plan) { }
}

export class CreatePlanError implements Action {
    readonly type = CREATE_PLAN_ERROR;
    constructor(public payload: Error) { }
}

export class GetPlanes implements Action {
    readonly type = GET_PLANES;
}

export class GetPlanesSucces implements Action {
    readonly type = GET_PLANES_SUCCESS;
    constructor(public payload: Plan[]) {
    }
}

export class GetPlanesError implements Action {
    readonly type = GET_PLANES_ERROR;
    constructor(public payload: Error) { }
}

export type PlanActions =
    | CreatePlan
    | CreatePlanSucces
    | CreatePlanError
    | GetPlanes
    | GetPlanesSucces
    | GetPlanesError;