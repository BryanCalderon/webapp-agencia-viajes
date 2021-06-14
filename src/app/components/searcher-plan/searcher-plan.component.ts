import { Component, OnInit } from '@angular/core';
import { Ciudad, CiudadService } from '../../services/ciudad/ciudad.service';

type Model = { origen: String, destino: string, select: Number };

@Component({
  selector: 'app-searcher-plan',
  templateUrl: './searcher-plan.component.html',
  styleUrls: ['./searcher-plan.component.css']
})
export class SearcherPlanComponent implements OnInit {

  public model: Model = { origen: '', destino: '', select: 1 };
  ciudades: Ciudad[];

  constructor(private ciudadService: CiudadService) { }

  ngOnInit() {
    this.model.select = 1;
    this.getCities();
  }

  getCities() {
    this.ciudadService.get().subscribe(data => {
      this.ciudades = data;
    });
  }

}
