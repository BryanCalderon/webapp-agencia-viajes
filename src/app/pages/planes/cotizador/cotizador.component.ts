import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth/auth.service';
import { Compra, ComprasService } from '../../../services/compras/compras.service';
import { ToastService } from '../../../services/toast/toast.service';
import { UtilService } from '../../../utils/util.service';
import { PlanService } from '../../../services/plan/plan.service';

// interface Model { plan: Plan, origen: String, destino: string, select: Number, fromDate: NgbDate, toDate: NgbDate };

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
  currentStep: number = 0;
  titleWizard: string;
  model = {
    plan: {}
  };
  cost = 0;

  steps = [
    "Detalles del plan",
    "Servicios adicionales",
    "Datos de los pasajeros",
    "Confirmación"
  ];

  constructor(
    private route: ActivatedRoute,
    private planService: PlanService,
    calendar: NgbCalendar,
    private authService: AuthService,
    private compraService: ComprasService,
    public toastService: ToastService,
    private router: Router,
    public utilService: UtilService
  ) {
    this.model["fromDate"] = calendar.getToday();
    this.model["toDate"] = calendar.getNext(calendar.getToday(), 'd', 5);
  }

  ngOnInit(): void {
    this.setTitleWizard();
    this.route.paramMap.subscribe(p => {
      let id = p['params']['id'];
      this.getPlan(id);
    })
  }

  getTotalCost() {
    this.cost = this.model['plan']['precio'];

    if (this.model['tipoHabitacion']) {
      this.cost += this.model['tipoHabitacion']['precio'];
    }

    if (this.model['servicios']) {
      this.model['servicios'].forEach(element => this.cost += element['precio']);
    }
  }

  getPlan(id: Number) {
    this.planService.getById(id).subscribe(data => {
      this.model["plan"] = data;
      this.getTotalCost();
    });
  }

  changeStep(event) {
    let id = event["toElement"]["id"];
    document.getElementById(id).classList.add("done");
    this.currentStep = parseInt(id);
    this.setTitleWizard();
  }

  setTitleWizard() {
    this.titleWizard = this.steps[this.currentStep];
  }

  nextStep() {
    this.currentStep += 1;
    this.setTitleWizard();
    console.log(this.model);

  }

  prevStep() {
    this.currentStep -= 1;
    this.setTitleWizard();
  }

  comprar() {
    let cliente = this.authService.getClientIntoLS();
    let referidos = this.model['pasajeros'];

    referidos.forEach(element => {
      if (element['fecha_nacimiento']) {
        element['fecha_nacimiento'] = this.utilService.convertToDate(element['fecha_nacimiento'])
      }
    });

    let compra: Compra = {
      plan: this.model['plan'],
      referidos: referidos,
      cliente: cliente,
      ciudad: this.model['ciudad'],
      fecha_ida: this.utilService.convertToDate(this.model['fromDate']),
      fecha_regreso: this.utilService.convertToDate(this.model['toDate']),
      precio: this.cost,
      hotel: this.model['hotel'],
      servicios: this.model['servicios'],
      tipo_habitacion: this.model['tipoHabitacion'] ? this.model['tipoHabitacion'] : null,
    };

    this.compraService.create(compra).subscribe(data => {
      this.toastService.show("Se ha realizado la compra satisfactoriamente", { classname: 'bg-success text-light', delay: 5000 });
      this.router.navigate(['/home']);
    });
    console.log(compra);
  }
}
