import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCliComponent } from './eliminar-cli.component';

describe('EliminarCliComponent', () => {
  let component: EliminarCliComponent;
  let fixture: ComponentFixture<EliminarCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
