import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel/hotel.service';
import { ServiciosHotelService } from 'src/app/shared/services/serviciosHotel/servicios-hotel.service';
import { TipoHabitacionService } from 'src/app/shared/services/tipoHabitacion/tipo-habitacion.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  @Input() model;
  hoteles: [] = [];
  servicios: [] = [];
  tipoHabitaciones: [] = [];

  constructor(private hotelService: HotelService, private servicioHotelService: ServiciosHotelService, private tipoHabitacionService: TipoHabitacionService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.hotelService.get().subscribe(data => {
      this.hoteles = data;
    })
  }

  onChangeHotel() {
    this.getServiciosHotel();
    this.getTipoHabitaciones();
  }

  getServiciosHotel() {
    this.servicioHotelService.get().subscribe(data => {
      this.servicios = data;
    })
  }

  getTipoHabitaciones() {
    this.tipoHabitacionService.get().subscribe(data => {
      this.tipoHabitaciones = data;
    })
  }


  changeServicios(event) {
    if (!this.model["servicios"]) {
      this.model.servicios = [];
    }

    if (event.target.checked) {
      this.model.servicios.push(event.target.value);
    } else {
      let i: number = 0;
      this.model.servicios.forEach((item) => {
        if (item == event.target.value) {
          this.model.servicios.splice(i, 1);
          return;
        }
        i++;
      });
    }
  }

}
