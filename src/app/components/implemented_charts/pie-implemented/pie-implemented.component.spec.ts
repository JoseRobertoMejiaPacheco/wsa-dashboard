import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieImplementedComponent } from './pie-implemented.component';

describe('PieImplementedComponent', () => {
  let component: PieImplementedComponent;
  let fixture: ComponentFixture<PieImplementedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieImplementedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieImplementedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
