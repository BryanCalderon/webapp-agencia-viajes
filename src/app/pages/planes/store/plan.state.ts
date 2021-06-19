import { Plan } from '../../../entities/Plan';

export interface PlanState {
    plan: Plan;
    planes: Plan[];
}

export const initialPlanState: PlanState = {
    plan: null,
    planes: null
};