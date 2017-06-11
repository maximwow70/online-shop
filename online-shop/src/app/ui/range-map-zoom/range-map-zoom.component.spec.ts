import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeMapZoomComponent } from './range-map-zoom.component';

describe('RangeMapZoomComponent', () => {
  let component: RangeMapZoomComponent;
  let fixture: ComponentFixture<RangeMapZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeMapZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeMapZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
