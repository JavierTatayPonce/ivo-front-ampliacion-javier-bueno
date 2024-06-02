import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionAdminComponent } from './componente-confirmacion-admin.component';

describe('ComponenteConfirmacionAdminComponent', () => {
  let component: ComponenteConfirmacionAdminComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionAdminComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
