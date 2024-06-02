import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResumenInciAdminComponent } from './componente-resumen-inci-admin.component';

describe('ComponenteResumenInciAdminComponent', () => {
  let component: ComponenteResumenInciAdminComponent;
  let fixture: ComponentFixture<ComponenteResumenInciAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteResumenInciAdminComponent]
    });
    fixture = TestBed.createComponent(ComponenteResumenInciAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
