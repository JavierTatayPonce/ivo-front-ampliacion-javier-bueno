import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionEditarAdminComponent } from './componente-confirmacion-editar-admin.component';

describe('ComponenteConfirmacionEditarAdminComponent', () => {
  let component: ComponenteConfirmacionEditarAdminComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionEditarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionEditarAdminComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionEditarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
