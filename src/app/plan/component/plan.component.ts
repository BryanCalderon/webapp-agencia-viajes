import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan, PlanService } from '../service/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  id: Number;
  plan: Plan

  constructor(private route: ActivatedRoute, private planService: PlanService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      this.id = p['params']['id'];
      this.getPlan(this.id);
    })
  }

  getPlan(id: Number) {
    this.planService.get().subscribe(data => {
      this.plan = data.find(p => p.id == id)
    });
  }

}
