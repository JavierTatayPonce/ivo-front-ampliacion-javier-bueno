import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearIncidenciaRadiologoComponent } from './componente-crear-incidencia-radiologo.component';

describe('ComponenteCrearIncidenciaRadiologoComponent', () => {
  let component: ComponenteCrearIncidenciaRadiologoComponent;
  let fixture: ComponentFixture<ComponenteCrearIncidenciaRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearIncidenciaRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearIncidenciaRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
