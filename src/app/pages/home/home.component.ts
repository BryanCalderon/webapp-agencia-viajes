import { Component, OnInit } from '@angular/core';
import { Plan } from '../../entities/Plan';
import { PlanService } from '../../services/plan/plan.service';

interface Fecha {
  id: Number,
  fecha_ida: Date,
  fecha_regreso: Date
  precio: Number,
  plan: Number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerWidth: number;
  innerHeight: number;
  planes: Plan[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.getPlanes();
  }

  getPlanes() {
    this.planService.get({}).subscribe(data => {
      this.planes = data.results;
    });
  }

  capitalize(text) {
    return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase()
  }
}
