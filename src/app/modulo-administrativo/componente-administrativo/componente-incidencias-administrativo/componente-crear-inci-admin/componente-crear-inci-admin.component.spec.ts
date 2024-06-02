import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearInciAdminComponent } from './componente-crear-inci-admin.component';

describe('ComponenteCrearInciAdminComponent', () => {
  let component: ComponenteCrearInciAdminComponent;
  let fixture: ComponentFixture<ComponenteCrearInciAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearInciAdminComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearInciAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
