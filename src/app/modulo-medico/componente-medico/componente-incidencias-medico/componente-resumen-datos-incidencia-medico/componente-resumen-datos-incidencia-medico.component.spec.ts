import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResumenDatosIncidenciaMedicoComponent } from './componente-resumen-datos-incidencia-medico.component';

describe('ComponenteResumenDatosIncidenciaMedicoComponent', () => {
  let component: ComponenteResumenDatosIncidenciaMedicoComponent;
  let fixture: ComponentFixture<ComponenteResumenDatosIncidenciaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteResumenDatosIncidenciaMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteResumenDatosIncidenciaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
