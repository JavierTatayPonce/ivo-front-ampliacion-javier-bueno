import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIncidenciasMedicoComponent } from './componente-incidencias-medico.component';

describe('ComponenteIncidenciasMedicoComponent', () => {
  let component: ComponenteIncidenciasMedicoComponent;
  let fixture: ComponentFixture<ComponenteIncidenciasMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteIncidenciasMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteIncidenciasMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
