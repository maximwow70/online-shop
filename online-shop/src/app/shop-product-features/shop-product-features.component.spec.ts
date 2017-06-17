import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductFeaturesComponent } from './shop-product-features.component';

describe('ShopProductFeaturesComponent', () => {
  let component: ShopProductFeaturesComponent;
  let fixture: ComponentFixture<ShopProductFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
