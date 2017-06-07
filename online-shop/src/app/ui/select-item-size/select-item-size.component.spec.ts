import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemSizeComponent } from './select-item-size.component';

describe('SelectItemSizeComponent', () => {
  let component: SelectItemSizeComponent;
  let fixture: ComponentFixture<SelectItemSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectItemSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
