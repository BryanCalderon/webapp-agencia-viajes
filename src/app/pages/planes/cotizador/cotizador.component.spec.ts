import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CotizadorComponent } from './cotizador.component';

@Component({ selector: 'app-step1', template: '' })
class Step1Component {
  @Input() model: any;
}

@Component({ selector: 'app-step2', template: '' })
class Step2Component {
  @Input() model: any;
}

@Component({ selector: 'app-step3', template: '' })
class Step3Component {
  @Input() model: any;
}

@Component({ selector: 'app-step4', template: '' })
class Step4Component {
  @Input() model: any;
  @Input() steps;
}

describe('CotizadorComponent', () => {
  let component: CotizadorComponent;
  let fixture: ComponentFixture<CotizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotizadorComponent, Step1Component, Step2Component, Step3Component, Step4Component],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
