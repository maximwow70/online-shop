import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizepickerComponent } from './sizepicker.component';

describe('SizepickerComponent', () => {
  let component: SizepickerComponent;
  let fixture: ComponentFixture<SizepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
