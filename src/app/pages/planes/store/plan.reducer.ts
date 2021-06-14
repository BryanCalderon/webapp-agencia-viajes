import * as actions from './plan.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { initialPlanState, PlanState } from './plan.state';

/** We get only success state */
export function reducer(state = initialPlanState, action: actions.PlanActions): PlanState {
    switch (action.type) {
        case actions.GET_PLANES_SUCCESS:
            return { ...state, planes: action.payload };
        case actions.CREATE_PLAN_SUCCESS:
            console.log(action);
            state.planes.push(action.payload);
            return { ...state, plan: action.payload };
        default:
            return state;
    }
}

export const getPlanState = createFeatureSelector<PlanState>('planes');
export const getPlanes = createSelector(getPlanState, (state: PlanState) => state.planes);