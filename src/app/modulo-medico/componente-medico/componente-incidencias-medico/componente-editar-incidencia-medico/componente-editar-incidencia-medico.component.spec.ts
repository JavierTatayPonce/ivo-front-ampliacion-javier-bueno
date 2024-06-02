import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEditarIncidenciaMedicoComponent } from './componente-editar-incidencia-medico.component';

describe('ComponenteEditarIncidenciaMedicoComponent', () => {
  let component: ComponenteEditarIncidenciaMedicoComponent;
  let fixture: ComponentFixture<ComponenteEditarIncidenciaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteEditarIncidenciaMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteEditarIncidenciaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
