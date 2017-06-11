import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ItemColorService } from "app/_services/item-color/item-color.service";
import { ItemCostService } from "app/_services/item-cost/item-cost.service";
import { ItemSizeService } from "app/_services/item-size/item-size.service";
import { ItemListService } from "app/_services/item-list/item-list.service";
import { ItemService } from "app/_services/item/item.service";
import { CategoryListService } from "app/_services/category-list/category-list.service";
import { UserDataService } from "app/_services/user-data/user-data.service";

import { OnlineShopComponent } from './online-shop/online-shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsSearchComponent } from './items-search/items-search.component';
import { ItemComponent } from './item/item.component';
import { LoadingComponent } from './loading/loading.component';

import { SelectItemCountComponent } from './ui/select-item-count/select-item-count.component';
import { SelectItemColorComponent } from './ui/select-item-color/select-item-color.component';
import { SelectItemSizeComponent } from './ui/select-item-size/select-item-size.component';
import { ItemPhotosComponent } from './item-photos/item-photos.component';
import { SizeGuideComponent } from './size-guide/size-guide.component';
import { ColorpickerComponent } from './ui/colorpicker/colorpicker.component';
import { SizepickerComponent } from './ui/sizepicker/sizepicker.component';
import { CostpickerComponent } from './ui/costpicker/costpicker.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: OnlineShopComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'products/:id', component: ItemComponent },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OnlineShopComponent,
    ItemsSearchComponent,
    ItemComponent,
    PageNotFoundComponent,
    ItemListComponent,
    LoadingComponent,
    SelectItemCountComponent,
    SelectItemColorComponent,
    SelectItemSizeComponent,
    ItemPhotosComponent,
    SizeGuideComponent,
    ColorpickerComponent,
    SizepickerComponent,
    CostpickerComponent,
    CategoryListComponent,
    PaginatorComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemColorService,
    ItemCostService,
    ItemSizeService,
    ItemListService,
    ItemService,
    CategoryListService,
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
