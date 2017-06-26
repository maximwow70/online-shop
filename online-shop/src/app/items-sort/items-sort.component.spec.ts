import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSortComponent } from './items-sort.component';

describe('ItemsSortComponent', () => {
  let component: ItemsSortComponent;
  let fixture: ComponentFixture<ItemsSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
