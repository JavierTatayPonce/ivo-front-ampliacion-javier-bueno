import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTablaIncidenciaComponent } from './componente-tabla-incidencia.component';

describe('ComponenteTablaIncidenciaComponent', () => {
  let component: ComponenteTablaIncidenciaComponent;
  let fixture: ComponentFixture<ComponenteTablaIncidenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteTablaIncidenciaComponent]
    });
    fixture = TestBed.createComponent(ComponenteTablaIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
