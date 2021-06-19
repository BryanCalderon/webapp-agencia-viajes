import { Component, Input, OnInit } from '@angular/core';
import { Ciudad } from '../../../../../services/ciudad/ciudad.service';
import { Departamento, DepartamentoService } from '../../../../../services/departamento/departamento.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  @Input() model: any;
  ciudades: Ciudad[];
  departamentos: Departamento[];

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit() {
    this.getDepartamentos();
  }

  getDepartamentos() {
    this.departamentoService.get().subscribe(data => {
      this.departamentos = data;
    });
  }

  getCities(event: any) {
    let deparId = event.item['id'];
    this.departamentoService.getCities(deparId).subscribe(data => {
      this.ciudades = data;
    });
  }
}
