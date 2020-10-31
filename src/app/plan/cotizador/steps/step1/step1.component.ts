import { Component, Input, OnInit } from '@angular/core';
import { Ciudad, CiudadService } from 'src/app/shared/services/ciudad/ciudad.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  @Input() model;
  ciudades: Ciudad[];

  constructor(private ciudadService: CiudadService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.ciudadService.getCities().subscribe(data => {
      this.ciudades = data;
    });
  }
}
