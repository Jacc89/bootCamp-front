import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRemComponent } from './editar-rem.component';

describe('EditarRemComponent', () => {
  let component: EditarRemComponent;
  let fixture: ComponentFixture<EditarRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
