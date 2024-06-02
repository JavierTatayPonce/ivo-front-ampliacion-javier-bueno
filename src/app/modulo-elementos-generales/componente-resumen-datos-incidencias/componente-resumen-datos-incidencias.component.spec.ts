import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResumenDatosIncidenciasComponent } from './componente-resumen-datos-incidencias.component';

describe('ComponenteResumenDatosIncidenciasComponent', () => {
  let component: ComponenteResumenDatosIncidenciasComponent;
  let fixture: ComponentFixture<ComponenteResumenDatosIncidenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteResumenDatosIncidenciasComponent]
    });
    fixture = TestBed.createComponent(ComponenteResumenDatosIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
