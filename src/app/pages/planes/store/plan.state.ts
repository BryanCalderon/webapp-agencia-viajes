import { Plan } from '../service/plan.service';

export interface PlanState {
    plan: Plan;
    planes: Plan[];
}

export const initialPlanState: PlanState = {
    plan: null,
    planes: null
};