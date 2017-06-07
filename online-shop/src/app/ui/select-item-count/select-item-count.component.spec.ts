import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemCountComponent } from './select-item-count.component';

describe('SelectItemCountComponent', () => {
  let component: SelectItemCountComponent;
  let fixture: ComponentFixture<SelectItemCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectItemCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
