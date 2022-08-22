import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRemComponent } from './listar-rem.component';

describe('ListarRemComponent', () => {
  let component: ListarRemComponent;
  let fixture: ComponentFixture<ListarRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
