import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartOrderComponent } from './user-cart-order.component';

describe('UserCartOrderComponent', () => {
  let component: UserCartOrderComponent;
  let fixture: ComponentFixture<UserCartOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
