import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionEditarMedicoComponent } from './componente-confirmacion-editar-medico.component';

describe('ComponenteConfirmacionEditarMedicoComponent', () => {
  let component: ComponenteConfirmacionEditarMedicoComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionEditarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionEditarMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionEditarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
