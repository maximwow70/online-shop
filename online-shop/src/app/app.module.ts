import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';

import { ItemColorService } from "app/_services/item-color/item-color.service";
import { ItemCostService } from "app/_services/item-cost/item-cost.service";
import { ItemSizeService } from "app/_services/item-size/item-size.service";
import { ItemsSearchComponent } from './items-search/items-search.component';
import { ItemListService } from "app/_services/item-list/item-list.service";
import { ItemComponent } from './item/item.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemService } from "app/_services/item/item.service";

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
    NavigationComponent,
    ItemListComponent
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
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
