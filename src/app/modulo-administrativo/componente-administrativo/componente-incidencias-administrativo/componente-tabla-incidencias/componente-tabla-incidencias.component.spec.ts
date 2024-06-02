import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTablaIncidenciasComponent } from './componente-tabla-incidencias.component';

describe('ComponenteTablaIncidenciasComponent', () => {
  let component: ComponenteTablaIncidenciasComponent;
  let fixture: ComponentFixture<ComponenteTablaIncidenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteTablaIncidenciasComponent]
    });
    fixture = TestBed.createComponent(ComponenteTablaIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
