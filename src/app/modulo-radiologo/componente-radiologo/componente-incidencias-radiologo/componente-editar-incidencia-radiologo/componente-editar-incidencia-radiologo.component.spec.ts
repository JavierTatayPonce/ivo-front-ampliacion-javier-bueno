import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEditarIncidenciaRadiologoComponent } from './componente-editar-incidencia-radiologo.component';

describe('ComponenteEditarIncidenciaRadiologoComponent', () => {
  let component: ComponenteEditarIncidenciaRadiologoComponent;
  let fixture: ComponentFixture<ComponenteEditarIncidenciaRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteEditarIncidenciaRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteEditarIncidenciaRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
