import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFormularioIncidenciasComponent } from './componente-formulario-incidencias.component';

describe('ComponenteFormularioIncidenciasComponent', () => {
  let component: ComponenteFormularioIncidenciasComponent;
  let fixture: ComponentFixture<ComponenteFormularioIncidenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteFormularioIncidenciasComponent]
    });
    fixture = TestBed.createComponent(ComponenteFormularioIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
