import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionIncidenciaComponent } from './componente-confirmacion-incidencia.component';

describe('ComponenteConfirmacionIncidenciaComponent', () => {
  let component: ComponenteConfirmacionIncidenciaComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionIncidenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionIncidenciaComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
