import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmpComponent } from './eliminar-emp.component';

describe('EliminarEmpComponent', () => {
  let component: EliminarEmpComponent;
  let fixture: ComponentFixture<EliminarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
