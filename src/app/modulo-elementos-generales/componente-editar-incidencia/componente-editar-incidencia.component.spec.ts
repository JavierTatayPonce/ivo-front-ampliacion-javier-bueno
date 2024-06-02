import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEditarIncidenciaComponent } from './componente-editar-incidencia.component';

describe('ComponenteEditarIncidenciaComponent', () => {
  let component: ComponenteEditarIncidenciaComponent;
  let fixture: ComponentFixture<ComponenteEditarIncidenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteEditarIncidenciaComponent]
    });
    fixture = TestBed.createComponent(ComponenteEditarIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
