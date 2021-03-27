import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  @Input() model;

  tipos_documentos = [
    { id: 1, descripcion: 'CC' },
    { id: 2, descripcion: 'TI' },
    { id: 3, descripcion: 'Pasaporte' }
  ];


  constructor() { }

  ngOnInit(): void {
    this.generateRowIndexes(this.model.totalPersonas);
  }

  public generateRowIndexes(count: number) {
    if (!this.model["pasajeros"]) {
      this.model.pasajeros = [];

      for (let i = 0; i < count; i++) {
        this.model.pasajeros.push({});
      }
    }
  }

}
