import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { ReviewComponent } from '../../components/review/review.component';
import { reducer } from './store/plan.reducer';
import { PlanEffect } from './store/plan.effect';
import { PlanService } from './service/plan.service';
import { PlanRoutingModule } from './plan-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';
import { CotizadorModule } from './cotizador/cotizador.module';

@NgModule({
    imports: [
        CommonModule,
        PlanRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('planes', reducer),
        EffectsModule.forRoot([PlanEffect]),
        NgbModule,
        CotizadorModule
    ],
    providers: [PlanService],
    declarations: [PlanComponent, DetailPlanComponent, ReviewComponent],
    exports: [PlanComponent, ReviewComponent]
})

export class PlanModule { }