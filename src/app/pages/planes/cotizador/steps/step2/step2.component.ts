import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelService } from '../../../../../services/hotel/hotel.service';
import { ServiciosHotelService } from '../../../../../services/serviciosHotel/servicios-hotel.service';
import { TipoHabitacionService } from '../../../../../services/tipoHabitacion/tipo-habitacion.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  @Input() model;
  @Output() onChangeEvent = new EventEmitter<string>();
  hoteles: [] = [];
  servicios: [] = [];
  tipoHabitaciones: [] = [];

  constructor(private hotelService: HotelService, private servicioHotelService: ServiciosHotelService, private tipoHabitacionService: TipoHabitacionService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.hotelService.getByCity(this.model['ciudad']['id']).subscribe(data => {
      this.hoteles = data;
    })
  }

  onChangeHotel() {
    console.log(this.model.hotel);
    this.getServiciosHotel();
    this.getTipoHabitaciones();
  }

  selectedItem() {
    this.onChangeEvent.emit();
  }

  getServiciosHotel() {
    this.servicioHotelService.getByhotel(this.model['hotel']['id']).subscribe(data => {
      this.servicios = data;
    })
  }

  getTipoHabitaciones() {
    this.tipoHabitacionService.getByhotel(this.model['hotel']['id']).subscribe(data => {
      this.tipoHabitaciones = data;
    })
  }

  changeServicios(servicio) {
    if (!this.model["servicios"]) {
      this.model.servicios = [];
    }

    let index = this.model.servicios.indexOf(servicio);

    if (index > -1) {
      this.model.servicios.splice(index, 1);
    } else {
      this.model.servicios.push(servicio);
    }

    this.selectedItem();
  }
}
