import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRemComponent } from './home-rem.component';

describe('HomeRemComponent', () => {
  let component: HomeRemComponent;
  let fixture: ComponentFixture<HomeRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
