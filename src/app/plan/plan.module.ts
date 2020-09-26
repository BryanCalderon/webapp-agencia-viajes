import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './component/plan.component';
import { reducer } from './store/plan.reducer';
import { PlanEffect } from './store/plan.effect';
import { PlanService } from './service/plan.service';
import { PlanRoutingModule } from './plan-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PlanRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('planes', reducer),
        EffectsModule.forRoot([PlanEffect]),
        NgbModule
    ],
    providers: [PlanService],
    declarations: [PlanComponent],
    exports: [PlanComponent]
})

export class PlanModule { }