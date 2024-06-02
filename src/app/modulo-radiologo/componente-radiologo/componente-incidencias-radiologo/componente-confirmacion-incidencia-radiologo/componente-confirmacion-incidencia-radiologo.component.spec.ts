import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionIncidenciaRadiologoComponent } from './componente-confirmacion-incidencia-radiologo.component';

describe('ComponenteConfirmacionIncidenciaRadiologoComponent', () => {
  let component: ComponenteConfirmacionIncidenciaRadiologoComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionIncidenciaRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionIncidenciaRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionIncidenciaRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
