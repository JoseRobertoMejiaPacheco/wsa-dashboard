import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DounotsComponent } from './dounots.component';

describe('DounotsComponent', () => {
  let component: DounotsComponent;
  let fixture: ComponentFixture<DounotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DounotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DounotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
