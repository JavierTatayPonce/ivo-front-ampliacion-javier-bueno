import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEditarIncidenciaAdminComponent } from './componente-editar-incidencia-admin.component';

describe('ComponenteEditarIncidenciaAdminComponent', () => {
  let component: ComponenteEditarIncidenciaAdminComponent;
  let fixture: ComponentFixture<ComponenteEditarIncidenciaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteEditarIncidenciaAdminComponent]
    });
    fixture = TestBed.createComponent(ComponenteEditarIncidenciaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
