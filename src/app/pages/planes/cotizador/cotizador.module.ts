import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanService } from '../../../services/plan/plan.service';
import { CotizadorComponent } from './cotizador.component';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgbModule,
    ],
    providers: [PlanService],
    declarations: [CotizadorComponent, Step1Component, Step2Component, Step3Component, Step4Component],
    exports: [CotizadorComponent]
})

export class CotizadorModule { }