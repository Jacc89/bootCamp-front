import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpComponent } from './listar-emp.component';

describe('ListarEmpComponent', () => {
  let component: ListarEmpComponent;
  let fixture: ComponentFixture<ListarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
