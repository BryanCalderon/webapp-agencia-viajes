
import { Component, HostListener, OnInit } from '@angular/core';
import { Plan, PlanService } from '../plan/service/plan.service';

interface Promotions { id: Number, url: String, title: String, description: String };


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerWidth: number;
  innerHeight: number;
  promotions: Promotions[];
  planes: Plan[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.getSizeScreen();
    this.getPromotions(this.innerWidth, this.innerHeight);
    this.getPlanes();
  }

  getSizeScreen() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight / 2;
  }


  getPromotions(width: any, height: any) {
    this.promotions = [944, 1011, 984, 800, 740].map(n => {
      return {
        id: n,
        url: `https://picsum.photos/id/${n}/${width}/${height}`,
        title: `Random ${n} slide`,
        description: `Nulla ${n} vitae elit libero, a pharetra augue mollis interdum.`
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getSizeScreen();
    this.getPromotions(this.innerWidth, this.innerHeight);
  }

  getPlanes() {
    this.planService.get().subscribe(data => {
      this.planes = data;
    });
  }
}
