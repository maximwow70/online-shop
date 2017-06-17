import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFeaturesComponent } from './shop-features.component';

describe('ShopFeaturesComponent', () => {
  let component: ShopFeaturesComponent;
  let fixture: ComponentFixture<ShopFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
