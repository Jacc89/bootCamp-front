import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRemComponent } from './eliminar-rem.component';

describe('EliminarRemComponent', () => {
  let component: EliminarRemComponent;
  let fixture: ComponentFixture<EliminarRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
