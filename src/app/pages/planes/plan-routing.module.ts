import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';
import { PlanesComponent } from './planes.component';

const routes: Routes = [
    {
        path: 'planes',
        component: PlanesComponent
    },
    {
        path: 'plan/:id',
        children: [
            {
                path: '',
                component: DetailPlanComponent,
            },
            {
                path: 'cotizar',
                component: CotizadorComponent,
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