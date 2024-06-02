import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearIncidenciaMedicoComponent } from './componente-crear-incidencia-medico.component';

describe('ComponenteCrearIncidenciaMedicoComponent', () => {
  let component: ComponenteCrearIncidenciaMedicoComponent;
  let fixture: ComponentFixture<ComponenteCrearIncidenciaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearIncidenciaMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearIncidenciaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
