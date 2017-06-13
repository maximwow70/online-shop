import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingRoadComponent } from './shopping-road.component';

describe('ShoppingRoadComponent', () => {
  let component: ShoppingRoadComponent;
  let fixture: ComponentFixture<ShoppingRoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingRoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
