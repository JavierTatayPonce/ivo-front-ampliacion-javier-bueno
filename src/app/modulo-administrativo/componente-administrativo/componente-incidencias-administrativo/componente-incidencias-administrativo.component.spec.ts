import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIncidenciasAdministrativoComponent } from './componente-incidencias-administrativo.component';

describe('ComponenteIncidenciasAdministrativoComponent', () => {
  let component: ComponenteIncidenciasAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteIncidenciasAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteIncidenciasAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteIncidenciasAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
