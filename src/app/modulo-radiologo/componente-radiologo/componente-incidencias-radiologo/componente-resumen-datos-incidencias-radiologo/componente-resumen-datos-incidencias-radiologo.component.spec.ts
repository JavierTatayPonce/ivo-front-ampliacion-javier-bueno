import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResumenDatosIncidenciasRadiologoComponent } from './componente-resumen-datos-incidencias-radiologo.component';

describe('ComponenteResumenDatosIncidenciasRadiologoComponent', () => {
  let component: ComponenteResumenDatosIncidenciasRadiologoComponent;
  let fixture: ComponentFixture<ComponenteResumenDatosIncidenciasRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteResumenDatosIncidenciasRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteResumenDatosIncidenciasRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
