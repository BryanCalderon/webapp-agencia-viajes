import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';

const routes: Routes = [
    {
        path: 'plan/:id',
        // component: PlanComponent,
        children: [
            {
                path: '',
                component: DetailPlanComponent,
            },
            {
                path: 'cotizar',
                component: CotizadorComponent,
                // loadChildren: () => CotizadorModule
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class PlanRoutingModule { }