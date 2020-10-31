import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { PlanService } from '../service/plan.service';

// interface Model { plan: Plan, origen: String, destino: string, select: Number, fromDate: NgbDate, toDate: NgbDate };

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
  currentStep: number = 0;
  titleWizard: string;
  model = {};

  steps = [
    "Detalles del plan",
    "Servicios adicionales",
    "Datos de los pasajeros",
    "Confirmación"
  ];

  constructor(private route: ActivatedRoute, private planService: PlanService, calendar: NgbCalendar) {
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

  getPlan(id: Number) {
    this.planService.get().subscribe(data => {
      this.model["plan"] = data.find(p => p.id == id);
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
    console.log(this.model);
  }
}
