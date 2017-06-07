import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemColorComponent } from './select-item-color.component';

describe('SelectItemColorComponent', () => {
  let component: SelectItemColorComponent;
  let fixture: ComponentFixture<SelectItemColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectItemColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
