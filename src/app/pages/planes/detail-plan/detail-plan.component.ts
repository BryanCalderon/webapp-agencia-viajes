import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review, ReviewService } from '../../../services/review/review.service';
import { PlanService } from '../../../services/plan/plan.service';
import { Plan } from '../../../entities/Plan';

@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-plan.component.html',
  styleUrls: ['./detail-plan.component.css']
})
export class DetailPlanComponent implements OnInit {

  plan: Plan;
  reviews: Review[];
  errorMessage: String;

  constructor(
    private route: ActivatedRoute,
    private planService: PlanService,
    private reviewService: ReviewService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      const id = p['params']['id'];
      this.getPlan(id);
      this.getReviews(id);
    })
  }

  getPlan(id: Number) {
    this.planService.getById(id).subscribe(data => {
      this.plan = data;
      this.plan.totalNoches = this.getTotalNightsByDays(this.plan.totalDias);
    },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  getReviews(idPlan: Number) {
    this.reviewService.getByPlan(idPlan).subscribe(data => {
      this.reviews = data;
    })
  }

  getTotalNightsByDays(totalDays: number): number {
    if (!totalDays || totalDays == 0) return null;
    return totalDays - 1;
  }

  getTextDays(days: number): String {
    if (!days || days == 0) return null;
    return days + " " + (days > 1 ? "días" : "día");
  }

  getTextNights(days: number): String {
    if (!days || days == 0) return null;
    return days + " " + (days > 1 ? "noches" : "noche");
  }
}
