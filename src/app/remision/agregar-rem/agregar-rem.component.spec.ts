import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRemComponent } from './agregar-rem.component';

describe('AgregarRemComponent', () => {
  let component: AgregarRemComponent;
  let fixture: ComponentFixture<AgregarRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
