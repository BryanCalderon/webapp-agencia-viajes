import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../../entities/Plan';
import { Ciudad, CiudadService } from '../../services/ciudad/ciudad.service';
import { PlanService } from '../../services/plan/plan.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  ciudades: Ciudad[] = [];
  planes: Plan[] = [];
  model = {};
  pagination = {
    total: 1,
    page: 1,
    data: {
      limit: 5,
      offset: 0
    }
  }

  constructor(
    private planService: PlanService,
    private ciudadService: CiudadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(params => {
      let data = {
        offset: parseInt(params["offset"]),
        limit: parseInt(params["limit"])
      }
      this.pagination.data = data;
    })

  }

  ngOnInit(): void {
    this.getPlanes();
    this.getCities();
  }

  getPlanes() {
    this.planService.get(this.pagination.data).subscribe(
      data => {
        this.planes = data.results;
        this.pagination.total = data.count;
        this.pagination.page = (this.pagination.data.offset / this.pagination.data.limit) + 1;
      },
      error => console.log("ERROR planes >>>> ", error.error.message)
    )
  }

  getCities() {
    this.ciudadService.get().subscribe(
      data => this.ciudades = data,
      error => console.log("ERROR ciudades >>>> ", error.error.message)
    )
  }

  onChangePage() {
    this.pagination.data.offset = this.pagination.data.limit * (this.pagination.page - 1);
    this.getPlanes();
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: this.pagination.data,
        queryParamsHandling: 'merge'
      });
  }

}
