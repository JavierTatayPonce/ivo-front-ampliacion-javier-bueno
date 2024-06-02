import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionEditarRadiologoComponent } from './componente-confirmacion-editar-radiologo.component';

describe('ComponenteConfirmacionEditarRadiologoComponent', () => {
  let component: ComponenteConfirmacionEditarRadiologoComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionEditarRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionEditarRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionEditarRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
