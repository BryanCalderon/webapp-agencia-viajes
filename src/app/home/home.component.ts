import { Component, OnInit } from '@angular/core';
import { Plan, PlanService } from '../plan/service/plan.service';
import { Promocion, PromocionService } from '../services/promocion/promocion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerWidth: number;
  innerHeight: number;
  promotions: Promocion[];
  planes: Plan[];

  constructor(private planService: PlanService, private promocionService: PromocionService) { }

  ngOnInit() {
    this.getPromotions();
    this.getPlanes();
  }

  getPromotions() {
    this.promocionService.get().subscribe(result => {
      this.promotions = result;
    })
  }

  getPlanes() {
    this.planService.get().subscribe(data => {
      this.planes = data;
    });
  }
}
