import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TipoHabitacionService } from './tipo-habitacion.service';

describe('TipoHabitacionService', () => {
  let service: TipoHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TipoHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
