import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIncidenciasRadiologoComponent } from './componente-incidencias-radiologo.component';

describe('ComponenteIncidenciasRadiologoComponent', () => {
  let component: ComponenteIncidenciasRadiologoComponent;
  let fixture: ComponentFixture<ComponenteIncidenciasRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteIncidenciasRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteIncidenciasRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
